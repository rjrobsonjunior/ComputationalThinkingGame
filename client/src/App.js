import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Signup from './components/Signup';
import Login from './components/Login';
import Catalog from './components/Catalog';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import CodeRunner from './components/CodeRunner'
import CodeEditor from './components/CodeEditor'
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
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/codeEditor" element={<CodeEditor/>} />
        <Route exact path="/code" element={<CodeRunner/>} />
        <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={Home} />} />
      </Routes>
      <ToastContainer theme="dark" autoClose={300}/>
    </Router>
    
  );
};

export default App;
