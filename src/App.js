import React from 'react';
import './styles.css'; // Ensure this points to the correct location of your CSS file

function App() {
    const handleStart = () => {
        window.location.href = '/task'; // Ensure this points to the correct task route
    };

    return (
        <div className="container">
            <img src="/images/Cave.png" alt="Lucky Cards Plus Logo" className="logo" />
            <h1>Lucky Cards Plus</h1>
            <button onClick={handleStart} className="start-button">Start</button>
        </div>
    );
}

export default App;
