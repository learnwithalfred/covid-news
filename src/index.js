import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsDetailsPage from './features/news/NewsDetailsPage';
import NewsCategoryPage from './features/news/NewsCategoryPage';
import store from './app/store';

import './index.css';
import App from './App';
import CovidDetailsPage from './features/covid/covidDetails';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/news/:category" element={<NewsCategoryPage />} />
        <Route path="/country/:name" element={<CovidDetailsPage />} />
        <Route path="/news/:id/details" element={<NewsDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
