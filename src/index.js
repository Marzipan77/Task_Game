import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Task1 from './Task1'; // Ensure Task1 is imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task1" element={<Task1 />} /> {/* Task 1 page */}
    </Routes>
  </BrowserRouter>
);
