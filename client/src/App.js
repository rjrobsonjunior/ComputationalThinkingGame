import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
    </div>

  );
}

export default App;
