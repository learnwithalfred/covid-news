import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/auth/login';
import NewsIndexPage from './features/news/NewsIndexPage';
import NewsDetailsPage from './features/news/NewsDetailsPage';
import NewsCategoryPage from './features/news/NewsCategoryPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/news" element={<NewsIndexPage />} />
          <Route path="/news/:category" element={<NewsCategoryPage />} />
          <Route path="/news/:category/:name" element={<NewsDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
