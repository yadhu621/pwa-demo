import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [orientation, setOrientation] = useState('');

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.matchMedia('(orientation: portrait)').matches ? 'Hi' : 'Hello');
    };

    window.addEventListener('resize', handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      <h1>{orientation}</h1>
    </div>
  );
};

export default App;
