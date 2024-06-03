// JavaScript source code
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import logo from './logo.svg';
//import './Aula.css';

function Aula() {
    const [inputText, setInputText] = useState('');
    const [aula, setAula] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('C:\\Users\\rafae\\exemplo.json');
                setAula(response.data.aula);
            } catch (error) {
                console.error(`Erro ao buscar dados: ${error}`);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        try {
            const output = eval(inputText);
            console.log(output);
        } catch (error) {
            console.error(`Erro ao executar o código: ${error}`);
        }

        setInputText('');
    };

    return (
        <div className="Aula">
            <header className="Aula-header">
                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ flex: '1', borderRight: '1px solid black' }}>
                        {aula ? (
                            <div>
                                <h1>Aula</h1>
                                <p>{aula}</p>
                            </div>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </div>
                    <div style={{ flex: '1', padding: '10px' }}>
                        <textarea
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Digite aqui..."
                            style={{ width: '100%', height: '100%', marginBottom: '10px' }}
                        />
                        <button onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Aula;
