import React, { useState, useRef , useEffect} from 'react';
import * as monaco from 'monaco-editor';

const CodeRunner = () => {
  const [userInput, setUserInput] = useState('');
  const outputRef = useRef(null);

  const handleCodeChange = (event) => {
    setUserInput(event.target.value);
  };
  const editorRef = useRef(null);

  useEffect(() => {
    monaco.editor.create(editorRef.current, {
      value: '',
      language: 'javascript', // Set language mode
      // Other editor options...
    });

    // (Optional) Configure LSP server connection
    // ... (See LSP server documentation for details)
  }, []);

  const runCode = async () => {
    try {
      const code = userInput.trim(); // Remove leading/trailing whitespace

      // Use a sandboxed execution environment (recommended for security)
      const blob = new Blob([code], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
      const worker = new Worker(url);

      worker.postMessage('run'); // Send message to worker

      worker.onmessage = (event) => {
        outputRef.current.textContent = event.data;
      };

      worker.onerror = (error) => {
        outputRef.current.textContent = `Error: ${error.message}`;
      };

      // Clean up the worker after execution
      worker.onmessage = worker.onerror = null;
      URL.revokeObjectURL(url);

    } catch (error) {
      outputRef.current.textContent = `Error: ${error.message}`;
    }
  };

  return (
    <div className="code-runner">
      <h2>JavaScript Runner</h2>
      <div ref={editorRef} />
      <textarea
        className="code-input"
        value={userInput}
        onChange={handleCodeChange}
        placeholder="Enter your JavaScript code..."
      />
      <button className="run-button" onClick={runCode}>
        Run Code
      </button>
      <div className="output-container" ref={outputRef} />
    </div>
  );
};

export default CodeRunner;
