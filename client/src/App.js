import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.get('/api/auth/checkauth', {
          headers: { 'x-auth-token': token }
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error(error.message);
        setIsAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={Home} />} />
      </Routes>
      <ToastContainer theme="dark" autoClose={300}/>
    </Router>
    
  );
};

export default App;
