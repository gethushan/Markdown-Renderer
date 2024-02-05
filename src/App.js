
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [theme, setTheme] = useState('light');

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}-theme`}>
      <div className="editor">
        <h2>Markdown Input</h2>
        <textarea
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Type your Markdown here..."
        />
      </div>

      <div className="output">
        <div className="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </div>

        <h2>Rendered HTML Output</h2>
        <div className="outputDiv">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
