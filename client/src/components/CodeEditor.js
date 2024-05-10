import React, { useEffect, useRef } from 'react';
import CodeFlask from 'codeflask';


const CodeEditor = () => {
    const codeContainer = useRef(null);
  
    useEffect(() => {
      const flask = new CodeFlask(codeContainer.current, {
        language: 'javascript', // Set the language mode
        lineNumbers: true, // Enable line numbers
      });
  
      // Example: Set initial code
      const initialCode = `console.log('Hello, world!');`;
      flask.updateCode(initialCode);
  
      // Example: Add event listener for changes
      flask.onUpdate((code) => {
        console.log('Code changed:', code);
      });
  
      return () => {
        // Cleanup
        flask.destroy();
      };
    }, []);
  
    return (
      <div>
        <h2>Code Editor</h2>
        <div ref={codeContainer}></div>
      </div>
    );
  };
  
  export default CodeEditor;
  