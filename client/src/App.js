import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Catalog from './components/Catalog';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import TheoreticalQuiz from './components/TheoreticalQuiz';
import PraticalQuiz from './components/PraticalQuiz';
//import CodeRunner from './components/CodeRunner'
//import CodeEditor from './components/CodeEditor'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  //const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthenticated = async () => {
    const token = sessionStorage.getItem('token');
    //console.log("Verificando token...");

    if (token) {
      try {
        await axios.get('auth/checkauth', {
          headers: { 'x-auth-token': token }
        });

        //console.log("Token de sessão encontrado!");
        setIsAuthenticated(true);

      } catch (error) {

        console.error(error.message);
        setIsAuthenticated(false);

      }
    }
    else{
      console.log("Não há nenhum token de sessão!");
      setIsAuthenticated(false);
    }


    setIsLoading(false);
  };
  //        <Route exact path="/codeEditor" element={<CodeEditor/>} />         <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={Home} />} />

  useEffect(() => {
    checkAuthenticated();
  }, []);

  useEffect(() => {
    console.log("Estado de autenticação mudou:", isAuthenticated);
  }, [isAuthenticated]);

  

  return (
    
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login checkAuthenticated={checkAuthenticated} />} />
        <Route exact path="/quiz" element={<TheoreticalQuiz />} />
        <Route exact path="/praticalquiz" element={<PraticalQuiz />} />
        {/* Protected routes go here */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading} />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>}/>
        </Route>
        {/* Default redirect to login */}
        <Route path="*" element={<useNavigate to="/" />} />
      </Routes>
      <ToastContainer theme="dark" autoClose={1000}/>
    </Router>
    
  );
};

export default App;
