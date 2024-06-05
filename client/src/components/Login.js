import React, { useState } from 'react';
import axios from 'axios';
import logo from "./assets/logoPET.png";
import imagePage from "./assets/ladingpage.png"
import "./Signup.css";
import { useNavigate, Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Instantiate useNavigate
  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('auth/login', formData);

      //Armanezar o token no sessionStorage (Ná)
      sessionStorage.setItem('token', res.data.token);
      toast.success('Conectado com sucesso!'); 
      
      navigate('/catalog'); 
      console.log(res.data);
    } catch (error) {
      toast.error('Falha ao logar!');
      console.error(error.response.data);
    }
  };

  const handleClick = () => {
    navigate('/signup');
  };
  return (
    
    <div class="container" id="container">
      <div class="form-container sign-in-container">
          <img src={logo} alt="Logo" 
          style={{ 
          width: '150px', 
          padding: '15% 0px 0px 0px',
          margin: 'auto', 
          display: 'block'
          }} />
          
          
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange} 
            />
            <input type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange} 
            />
            <button type="submit">Entrar</button>
            <div className='chunxo'>
              <a>Não tem uma conta?</a>
              <Link to="/signup" style={{ color: '#f8bb0f' }}>Increva-se</Link>
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
                <button onClick={handleClick} class="ghost" id="signup">Inscrever-se</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;