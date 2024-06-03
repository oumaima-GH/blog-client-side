import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

export const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateInputs = () => {
    const { name, email, password, password2 } = userData;
    if (!name || !email || !password || !password2) {
      return 'All fields are required';
    }
    if (password !== password2) {
      return 'Passwords do not match';
    }
    return null;
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch('/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const result = await response.json();
      const jwtToken = result.token; 
      login(jwtToken); 

      navigate('/'); 
    } catch (error) {
      setError(error.message);
    }
  };

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className='signup'>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={registerSubmitHandler} className='form register-form'>
          {error && <p className="form-error-msg">{error}</p>}
          <input type="text" placeholder='Full name' name='name' value={userData.name} onChange={changeInputHandler} />
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              name='password'
              value={userData.password}
              onChange={changeInputHandler}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="toggle-password-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder='Confirm password'
              name='password2'
              value={userData.password2}
              onChange={changeInputHandler}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="toggle-password-btn"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account?<Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  );
};
