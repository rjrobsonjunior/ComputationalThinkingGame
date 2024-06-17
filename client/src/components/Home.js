import React from 'react';
import "./Home.css";
import Course from './Course';
import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const course = { name: 'Aprenda JavaScript', description: 'Aprenda as como usar JavaScript - um linguagem poderosa e interativa para contruir websites Interativos', level: 'Intermediário', duration: '25 hours', path: 'course/aprendajavascript' };
  const handleClick = () => {
    navigate('/quiz');
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Seus cursos:</h1>
      <div className='container2'  onClick={handleClick}>
        <Course key={course.name} {...course} />
      </div>
    </div>
  );
};

export default Home;
