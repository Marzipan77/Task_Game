import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const hieroglyphsArray = ['🔶', '🌙', '🔶', '🌀', '🦋', '🔺', '🔶', '⚫', '🌙', '🔶', '🔺', '🌞'];
const cipherKey = {
  '🔺': 'I',
  '⚫': 'D',
  '🌟': 'R',
  '🔶': 'S',
  '🦋': 'H',
  '🌙': 'A',
  '🌞': 'R',
};
const falseSymbol = '🌀';
const correctAnswer = 'SARIHSIAR'; // Assuming this is the decoded answer after applying the rules

function Task1() {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input === correctAnswer) {
      setFeedback('Correct answer! You may proceed.');
      setTimeout(() => navigate('/task2'), 1000); // Navigate to Task 2 after a short delay
    } else {
      setFeedback('Incorrect answer. Please try again.');
    }
  };

  const decodeMessage = () => {
    const decodedArray = hieroglyphsArray.map(symbol =>
      cipherKey[symbol] || (symbol === falseSymbol ? '' : symbol)
    );
    const reversedSegment = decodedArray.slice(0, 4).reverse();
    const remainingSegment = decodedArray.slice(4).reverse();
    const decodedMessage = [...reversedSegment, ...remainingSegment].join('');
    return decodedMessage;
  };

  return (
    <div className="task1-container">
      <div className="left-column">
        <ul>
          {Object.entries(cipherKey).map(([symbol, letter]) => (
            <li key={symbol}>{symbol} = {letter}</li>
          ))}
        </ul>

        <div className="rules-section">
          <h3>Additional Rules Applied:</h3>
          <p>1. Reverse Segments: Reverse the first 4 symbols.</p>
          <p>2. Introduce False Symbols: 🌀 (ignore this symbol).</p>
          <p>3. Read Segments in Specific Direction: Read the first part left-to-right and the second part right-to-left.</p>
          <p>4. Write the answer in the answer box.</p>
        </div>
      </div>

      <div className="main-content">
        <div className="hieroglyphs-message">
          <p>
            {hieroglyphsArray.map((symbol, index) => (
              <span key={index} className="hieroglyph-symbol">{symbol} </span>
            ))}
          </p>
        </div>
        <h2 className="h2-task-1">Decipher the Message</h2>
        <div className="answer-section">
          <input
            type="text"
            className="answer-input"
            placeholder="Enter answer"
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>

        {feedback && <p className="feedback-message">{feedback}</p>}
      </div>
    </div>
  );
}

export default Task1;
