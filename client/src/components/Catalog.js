import React from 'react';
import Course from './Course';
import Navbar from './Navbar';

import './Catalog.css'

const courses = [
    { name: 'Aprenda JavaScript', description: 'Aprenda as como usar JavaScript - um linguagem poderosa e interativa para contruir websites Interativos', level: 'Intermediário', duration: '25 hours' },
    { name: 'Lógica de Computação', description: 'Aprenda a pensar e estruturar ideias para escrever um software ou um algoritmo.', level: 'Iniciante', duration: '20 hours' },
    { name: 'Fundamentos da Programação', description: 'Comece sua jornada de programação com uma introdução ao mundo da programação e aos conceitos básicos.', level: 'Iniciante', duration: '5 hours' },
    { name: 'Desenvolvimento de Jogos', description: 'Explore o desenvolvimento de videogames, incluindo design de jogos, desenvolvimento de jogabilidade e criação de ativos.', level: 'Iniciante', duration: '5 hours' },
    { name: 'SQL', description: 'Neste curso de SQL, você aprenderá como gerenciar grandes conjuntos de dados e analisar dados reais usando a linguagem padrão de gerenciamento de dados.', level: 'Intermediário', duration: '25 hours' },
    { name: 'Introdução à segurança cibernética', description: 'Aprenda sobre o campo de rápido crescimento da segurança cibernética e como proteger seus dados e informações contra ataques digitais.', level: 'Iniciante', duration: '20 hours' },
    { name: 'Fundamentos da Programação 2', description: 'Comece sua jornada de programação com uma introdução ao mundo da programação e aos conceitos básicos.', level: 'Iniciante', duration: '5 hours' },
    ];

const Catalog = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='container2'>
                {courses.map((course) => (
                    <Course key={course.name} {...course} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;