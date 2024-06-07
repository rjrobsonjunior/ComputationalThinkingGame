import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./assets/logoPET.png";

const Navbar = () => {
  return (
    <nav>
        
      <ul>
        <img src={logo} alt="Logo"/>
        <li>
          <Link to="/home">Início</Link>
        </li>
        <li>
          <Link to="/catalog">Cursos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
