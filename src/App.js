import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CovidIndex from './features/covid/covid';
import CovidDetailsPage from './features/covid/covidDetails';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CovidIndex />} />
        <Route exact path="/country/:name" element={<CovidDetailsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
