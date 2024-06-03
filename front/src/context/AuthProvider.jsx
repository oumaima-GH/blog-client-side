import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    username: '',
    profilePicture: '',
    email: '',
    bio: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    setUser(token);
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem('token', token);
    console.log('Token =========================> ', token);
  };

  const logout = () => {
    setUser({
      username: '',
      profilePicture: '',
      email: '',
      bio: ''
    });
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  const updateUser = (newUserData) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, ...newUserData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};


// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({
//     username: '',
//     profilePicture: '',
//     email: '',
//     bio: ''
//   });
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     const storedToken = localStorage.getItem('token');
//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = (userData, token) => {
//     setUser(userData);
//     setToken(token);
//     setIsLoggedIn(true);
//     localStorage.setItem('user', JSON.stringify(userData));
//     localStorage.setItem('token', token);
//   };

//   const logout = () => {
//     setUser({
//       username: '',
//       profilePicture: '',
//       email: '',
//       bio: ''
//     });
//     setToken(null);
//     setIsLoggedIn(false);
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//   };

//   const updateUser = (newUserData) => {
//     setUser((prevUser) => {
//       const updatedUser = { ...prevUser, ...newUserData };
//       localStorage.setItem('user', JSON.stringify(updatedUser));
//       return updatedUser;
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
