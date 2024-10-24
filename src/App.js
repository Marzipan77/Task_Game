import React from 'react';
import './styles.css'; // Import your styles

const App = () => {
  const handleStart = () => {
    console.log('Start button clicked');
  };

  return (
    <div className="container">
      <img src="/images/Logo.png" alt="Lucky Cards Plus Logo" className="logo" />
      <h1>Lucky Cards Plus</h1>
      <button onClick={handleStart} className="start-button">Start</button>
    </div>
  );
};

export default App;
