import React, { useState } from 'react';
import './WordCounter.css';


const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const { value } = event.target;
    setText(value);
    setWordCount(value.trim().split(/\s+/).length);
  };

  return (
    <div className="word-counter">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here..."
        rows={10}
        cols={50}
      />
      <p><b>Word Count: {wordCount}</b></p>
    </div>
  );
};

export default WordCounter;
