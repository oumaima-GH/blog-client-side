import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios'; 

export const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle successful login
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/v1/login', userData);
      login(response.data.token);

      // save email to local storage
      localStorage.setItem('userEmail', userData.email);

      navigate('/');
    } catch (error) {
      setError(error.message || 'Login or password incorrect');
    }
  };

  // handle form submission
  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
    } else {
      handleLogin(); // call handleLogin if no validation errors
    }
  };

  // validate input fields
  const validateInputs = () => {
    const { email, password } = userData;
    if (!email || !password) {
      return 'All fields are required';
    }
    return null;
  };

  //  handle input changes
  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="signin">
      <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={loginSubmitHandler} className="form register-form">
          {error && <p className="form-error-msg">{error}</p>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
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
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to="/register">Sign up</Link>
        </small>
      </div>
    </section>
  );
};
