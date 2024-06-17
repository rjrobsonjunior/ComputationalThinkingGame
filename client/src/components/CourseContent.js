// src/components/CourseContent.js
import React from 'react';
import './CourseContent.css';
import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom';

const CourseContent = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/quiz');
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="course-content">
                <h1>Curso Introdutório de JavaScript</h1>

                <section>
                    <h2>1. Introdução</h2>
                    <p>JavaScript é uma linguagem de programação usada principalmente para criar interatividade em sites. Ele é uma das três principais tecnologias da web, junto com HTML e CSS.</p>
                </section>

                <section>
                    <h2>2. Variáveis</h2>
                    <p>Variáveis são usadas para armazenar dados que podem ser usados e manipulados posteriormente. Em JavaScript, você pode declarar uma variável usando <code>var</code>, <code>let</code>, ou <code>const</code>.</p>
                </section>

                <section>
                    <h2>3. Tipos de Dados</h2>
                    <p>JavaScript tem vários tipos de dados, incluindo strings, números, booleanos, objetos, e arrays. Cada tipo de dado serve para diferentes propósitos.</p>
                </section>

                <section>
                    <h2>4. Funções</h2>
                    <p>Funções são blocos de código que podem ser definidos uma vez e executados várias vezes. Você pode passar dados para uma função através de parâmetros e retornar dados de uma função.</p>
                </section>

                <button onClick={handleClick}>Quiz</button>


                {/* Adicione mais seções conforme necessário */}
            </div>
        </div>
    );
}

export default CourseContent;
