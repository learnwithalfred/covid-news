import React from 'react';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1>header goes here</h1>
      <div style={{ fontSize: 24 }}>App js</div>
      <button type="button" className="btn btn-primary">
        Click me
      </button>
    </>
  );
}

export default App;
