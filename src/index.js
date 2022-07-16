import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/auth/login';
import NewsIndexPage from './features/news/NewsIndexPage';
import NewsDetailsPage from './features/news/NewsDetailsPage';
import NewsCategoryPage from './features/news/NewsCategoryPage';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/news" element={<NewsIndexPage />} />
      <Route path="/news/:category" element={<NewsCategoryPage />} />
      <Route path="/news/:category/:name" element={<NewsDetailsPage />} />
    </Routes>
  </BrowserRouter>,
);
