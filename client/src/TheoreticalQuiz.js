import React, { useState } from 'react';
import "./TheoreticalQuiz.css";

const quizData = [
    {
      question: 'What command would reveal more information ONLY about the Scan function in the fmt package?',
      options: ['go doc', 'go doc fmt', 'fmt', 'go doc fmt.Scan'],
      answer: 'go doc fmt.Scan',
    },
    {
      question: 'Which of the following would be considered a literal in Go?',
      options: ['13,89', 'var literalVal literal', 'uint16', 'const litealVal = 13,89'],
      answer: '13,89',
    },
];

const TheoreticalQuiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedAnswer(option);
    };
  
    const handleNextQuestion = () => {
      if (selectedAnswer) {
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
    };
  
    const handleShowResult = () => {
      setShowResult(true);
    };
  
    const renderQuestion = () => {
      const question = quizData[currentQuestion];
      if (!question) {
        return null;
      }
  
      return (
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <div>
                {quizData[currentQuestion].options.map((option) => (
                  <button key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                  </button>
            ))}
        </div>
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next Question
          </button>
        </div>
      );
    };
  
    const renderResult = () => {
      return (
        <div>
          <h2>You scored {score} out of {quizData.length}</h2>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
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