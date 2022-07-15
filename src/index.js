import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
// import Home from './routes/home';
import DetailsPage from './routes/details';
import Login from './features/auth/login';
import HomePage from './features/metrics/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  </BrowserRouter>,
);
