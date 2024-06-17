import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "./PraticalQuiz.css";
import quizData from "./assets/quizpratico.json";
import {marked} from "marked";

const PraticalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markdownContent, setMarkdownContent] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchMarkdown =  () => {
      setMarkdownContent(marked(quizData[currentQuestion].questao)); // Render markdown using marked library
    };

    fetchMarkdown();
  }, [currentQuestion]);

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleNextQuestion = () => {
    if (userInput.trim() === quizData[currentQuestion].answer.trim()) {
      setIsCorrect(true);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserInput(''); // Clear user input for the next question
        setIsCorrect(false); // Reset isCorrect for the next answer check
      } else {
        setShowResult(true);
      }
    } else {
      setIsCorrect(false);
    }
    console.log(quizData[currentQuestion].answer);
    console.log(userInput.trim());
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setMarkdownContent(null);
    setUserInput('');
    setIsCorrect(false);
    setShowResult(false);
  };
  let progress = currentQuestion + 1;
  //<div className="quiz-content"><div className="markdown-section"> <ReactMarkdown>{markdownContent}</ReactMarkdown></div>
  return (
    <div className="quiz-container">
      <Navbar></Navbar>
      {markdownContent && (
        <div className="quiz-content">
        <div className="markdown-container" dangerouslySetInnerHTML={{ __html: markdownContent }}  />
          <div className="user-input-container">
            <textarea
              className="user-input"
              value={userInput}
              onChange={handleUserInputChange}
              placeholder="Enter your code..."
            />
            <button className="next-button" disabled={!userInput.trim()} onClick={handleNextQuestion}>
              {isCorrect ? 'Correct! Next Question' : 'Submit Answer'}
            </button>
          </div>
          <div className='progress-bar'>
            <span>{progress} / {quizData.length}</span>
            <div className='progress-fill'>
              <div style={{ width: `${(progress / quizData.length) * 100}%` }}></div>
            </div>
            <button className='button-next' onClick={handleNextQuestion} >
            Próxima
          </button>
          </div>
        </div>
      )}
      {showResult && (
        <div className="result-container">
          <h2>You scored {currentQuestion + 1} out of {quizData.length}</h2>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
  };

export default PraticalQuiz;