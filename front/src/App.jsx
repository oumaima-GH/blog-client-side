// import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { Layout } from './components/Layout.jsx'
// import { Home } from './pages/Home.jsx'
// import { Register } from './pages/Register.jsx'
// import { Login } from './pages/Login.jsx'
// import { AuthProvider } from './context/AuthProvider.jsx'
// import './index.css'


// import './App.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <div>404 Not Found</div>,
//     children: [
//       {index: true, element: <Home />},
//       {path: 'register', element: <Register/>},
//       {path: 'login', element: <Login/>},
//     ]
//   },

// ])

// function App() {

//   return (
//     <>
//     <AuthProvider>
//     <RouterProvider router={router} />
//     </AuthProvider>
      
//     </>
//   )
// }

// export default App
import React from 'react';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Register } from './pages/Register.jsx';
import { Login } from './pages/Login.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import './index.css';
import './App.css';
import About from './pages/About.jsx';
import ContactUs from './pages/Contact.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WriteArticle from './pages/WriteArticle.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div className='not-found'>404 Page Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'about', element: <About/>},
      { path: 'contact', element: <ContactUs/> },
      { path: 'profile', element: <ProfilePage/> },
      { path: 'write-article', element: <WriteArticle/>}
    ]
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
