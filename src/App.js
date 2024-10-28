import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import your styles

const App = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleStart = () => {
    console.log('Start button clicked');
    navigate('/task1'); // Navigate to the first task page
  };

  return (
    <div className="container">
      <img src="/images/backround.png" alt="" className="logo" />
      <button onClick={handleStart} className="start-button">
        Start
      </button>
    </div>
  );
};


export default App;
