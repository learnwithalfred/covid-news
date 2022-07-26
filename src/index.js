import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route exact path="/country/:name" element={<CovidDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
