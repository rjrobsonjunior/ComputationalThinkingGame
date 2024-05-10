import React, { useEffect, useRef } from 'react';
import CodeFlask from 'codeflask';

const CodeEditor = ({ code }) => {
  const codeContainer = useRef(null);

  useEffect(() => {
    const flask = new CodeFlask(codeContainer.current, {
      language: 'javascript', // Set the language mode
      lineNumbers: true, // Enable line numbers
    });

    // Set the initial code
    flask.updateCode(code);

    // Add event listener for changes
    flask.onUpdate((newCode) => {
      console.log('Code changed:', newCode);
    });

    return () => {
      // Cleanup
      flask.destroy();
    };
  }, [code]); // Re-run effect when code prop changes

  return (
    <div>
      <div ref={codeContainer}></div>
    </div>
  );
};

export default CodeEditor;

  