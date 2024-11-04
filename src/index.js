import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
      <Route path="/task3" element={<Task3 />} />
      <Route path="/task4" element={<Task4 />} />
      <Route path="/task5" element={<Task5 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

