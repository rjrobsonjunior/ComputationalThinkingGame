import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import Catalog from './components/Catalog';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import CodeRunner from './components/CodeRunner'
import CodeEditor from './components/CodeEditor'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    const token = sessionStorage.getItem('token');

    if (token) {
      try {
        await axios.get('auth/checkauth', {
          headers: { 'x-auth-token': token }
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error(error.message);
        setIsAuthenticated(false);
      }
    }
  };
  //        <Route exact path="/codeEditor" element={<CodeEditor/>} />         <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={Home} />} />

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        {/* Protected routes go here */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/home" element={<Home/>} />
          < Route path="/catalog" element={<Catalog/>}/>
        </Route>
        {/* Default redirect to login */}
        <Route path="*" element={<useNavigate to="/" />} />
      </Routes>
      <ToastContainer theme="dark" autoClose={300}/>
    </Router>
    
  );
};

export default App;
