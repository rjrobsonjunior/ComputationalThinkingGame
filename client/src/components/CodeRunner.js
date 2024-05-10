import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import './CodeRunner.css';

const CodeEvaluator = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState(null);
  const [expectedOutput, setExpectedOutput] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleExpectedOutputChange = (event) => {
    setExpectedOutput(event.target.value);
  };

  const handleRunCode = async () => {
    try {
      const result = await eval(code); // Consider security implications (see below)
      setOutput(result);
      setAnalysis(result === expectedOutput ? 'Correct!' : 'Incorrect');
    } catch (error) {
      setOutput('Error: ' + error.message);
      setAnalysis('Error in code');
    }
  };

  return (
    <div className='container'>
      <h2>JavaScript Code Evaluator</h2>
      <CodeEditor code={code} />
      <textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your JavaScript code here"
      />
      <br />
      <label htmlFor="expectedOutput">Expected Output:</label>
      <input
        type="text"
        id="expectedOutput"
        value={expectedOutput}
        onChange={handleExpectedOutputChange}
        placeholder="Enter the expected output"
      />
      <br />
      <button onClick={handleRunCode}>Run Code</button>
      <br />
      {output && <p>Output: {output}</p>}
      {analysis && <p>Analysis: {analysis}</p>}
    </div>
  );
};

export default CodeEvaluator;
