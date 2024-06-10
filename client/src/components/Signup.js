import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";
import logo from "./assets/logoPET.png";
import imagePage from "./assets/ladingpage.png"
import {toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';


function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Instantiate useNavigate
  const { username, email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signup', formData);
      console.log(res.data);
      toast.success('Registrado com Sucesso!'); 

      //Mover até pagina de login
      navigate('/')    
    } catch (error) {
      console.error(error.response.data);

      //toast.error('Falha ao Registrar!');
      toast.error(error.response.data.error);

    }
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    
    <div class="container" id="container">
      <div class="form-container sign-up-container">
      <img src={logo} alt="Logo" 
        style={{ 
          width: '150px', 
          padding: '15% 0px 0px 0px',
          margin: 'auto', 
          display: 'block' 
        }} />
        <form onSubmit={handleSubmit}>
            <h1>Criar uma Conta</h1>
            <input type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}/>
            <input type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange} />
            <input type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange} />
            <button type="submit" >registrar-se</button>
            <div className='chunxo'>
              <a>Já tem uma conta?</a>
              <Link to="/" style={{ color: '#f8bb0f' }}>Entrar</Link>
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
              <h1>Olá, amigo!</h1>
              <p>O jeito grátis, divertido e eficaz de aprender o mundo da programação!</p>
              <button onClick={handleClick} class="ghost" id="signIn">Entrar</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;