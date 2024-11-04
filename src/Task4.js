import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

// Define the initial Sudoku puzzle values
const sudokuValues = [
  [5, 6, '', 8, 4, 7, '', '', ''],
  [3, '', 9, '', '', '', 6, '', ''],
  ['', 1, 8, '', '', '', '', '', ''],
  [7, 9, '', '', '', '', '', 2, ''],
  ['', 5, '', 3, '', 9, '', '', ''],
  ['', '', '', '', 2, '', 8, '', 7],
  ['', '', '', '', '', '', '', 6, 9],
  ['', '', '', 1, 8, '', '', '', ''],
  ['', '', '', '', '', '', '', 3, 5]
];

// Define the correct password based on the solution of the Sudoku puzzle
const correctPassword = '539284761';

function Task4() {
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === correctPassword) {
      setFeedback('Correct password! You may proceed.');
      navigate('/task5'); // Navigate to Task5
    } else {
      setFeedback('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="task4-container">
      <div className="sudoku-grid">
        {sudokuValues.flat().map((value, index) => (
          <div key={index} className="sudoku-cell">
            {value}
          </div>
        ))}
      </div>
      
      <div className="password-section">
        <input
          type="text"
          className="password-input"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSubmit} className="submit-button">Submit</button>
      </div>

      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
}

export default Task4;

