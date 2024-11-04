import React, { useState } from 'react';
import './styles.css';

function Task2() {
  const [feedback, setFeedback] = useState('');

  const handleAnswer = () => {
    // Add logic for Task 2 answer validation
    setFeedback('Task 2 functionality is in progress!');
  };

  return (
    <div className="task2-container">
      <h2>Task 2: Decipher the Message in the Mayan Jungle</h2>
      <p>Task details go here...</p>

      <div className="answer-section">
        <input type="text" className="answer-input" placeholder="Enter answer" />
        <button onClick={handleAnswer} className="submit-button">Submit</button>
      </div>

      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
}

export default Task2;
