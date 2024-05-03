import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/signup', formData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    
    <div className  = "Login" > 
      <div className="col-lg-6 col-md-12">
        <img src="./page.png" className="img-fluid" />
      </div>
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;