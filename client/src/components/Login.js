import React, { useState } from 'react';
import axios from 'axios';
import logo from "./logoPET.png";
import imagePage from "./ladingpage.png"
import "./Signup.css";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('auth/login', formData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    
    <div class="container" id="container">
      <div class="form-container sign-in-container">
          <img src={logo} alt="Logo" 
          style={{ 
            width: '100px', 
            padding: '30% 0px 0px 0px',
            margin: 'auto', // Centralize horizontalmente
            display: 'block' // Certifique-se de que a margem funcione corretamente
          }} />
          
          
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange} 
            />
            <input ttype="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange} 
            />
            <button type="submit">Entrar</button>
            <div className='chunxo'>
              <a>Não tem uma conta?</a>
              <a style={{color:'#f8bb0f'}}>Increva-se</a>
            </div>
            
          </form>
      </div>
      <div class="overlay-container">
          <div class="overlay">
              <div class="overlay-panel overlay-right">
                <img src={imagePage} alt="Logo" 
                style={{ 
                  width: '300px', 
                  display: 'block' 
                }} />
                <h1>Bem vindo de volta!</h1>
                <p>Para se manter conectado conosco, faça login com suas credenciais!</p>
                <button class="ghost" id="Increva-se">Sign Up</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;