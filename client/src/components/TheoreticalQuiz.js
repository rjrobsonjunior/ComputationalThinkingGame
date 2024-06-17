import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "./TheoreticalQuiz.css";
import quizData from "./assets/quiz.json";
import { useNavigate } from 'react-router-dom';

const TheoreticalQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [answed, setAnswed] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

    const navigate = useNavigate();
    
    const handleOptionClick = (option) => {
      if(!answed)
        setSelectedAnswer(option);
      setAnswed(true);
      setShowCorrectAnswer(true);
    };

    useEffect(() => {
      const timeoutId = setTimeout(() => setShowCorrectAnswer(false), 2000);
      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }, [selectedAnswer]);

    const isCorrect = (option) => {
      return quizData[currentQuestion].answer === option;
    }
    const handleNextQuestion = () => {
      if (selectedAnswer) {
        setAnswed(false);
        const isCorrect = quizData[currentQuestion].answer === selectedAnswer;
        setScore(isCorrect ? score + 1 : score);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }
    };
  
    const handleRestartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      navigate('/praticalquiz');
    };
  
    const handleShowResult = () => {
      setShowResult(true);
    };
    const progress = currentQuestion + 1;

    const renderQuestion = () => {
      const question = quizData[currentQuestion];
      if (!question) {
        return null;
      }
  
      return (
        <div className='quiz-page'>
          <Navbar></Navbar>
          <h2>{quizData[currentQuestion].question}</h2>
          <div className='options-quiz'>
                {quizData[currentQuestion].options.map((option) => (
                  <button className={`button-quiz ${isCorrect(option) ? 'correct' : 'false'} ${option === selectedAnswer ? 'selected' : ''}`} key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </button>
            ))}
            {showCorrectAnswer && isCorrect(selectedAnswer) && <p>Correct!</p>}
            {showCorrectAnswer && !isCorrect(selectedAnswer) && <p>Incorrect. The correct answer is: {quizData[currentQuestion].answer}</p>}
          </div>
          <div className='progress-bar'>
            <span>{progress} / {quizData.length}</span>
            <div className='progress-fill'>
              <div style={{ width: `${(progress / quizData.length) * 100}%` }}></div>
            </div>
            <button className='button-next' onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Próxima
          </button>
          </div>
          
        </div>
      );
    };
  
    const renderResult = () => {
      return (
        <div className='result-page'>
          <h2>You scored {score} out of {quizData.length}</h2>
          <button onClick={handleRestartQuiz}>Próximo</button>
        </div>
      );
    };
  
    return (
      <div>
        {showResult ? renderResult() : renderQuestion()}
        {!showResult && currentQuestion === quizData.length && (
          <button onClick={handleShowResult}>Show Result</button>
        )}
      </div>
    );
};

export default TheoreticalQuiz;