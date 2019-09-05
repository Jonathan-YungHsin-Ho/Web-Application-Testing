import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const handleStrike = () => {
    setStrikes(prevState => (prevState === 2 ? 0 : prevState + 1));
  };

  const handleBall = () => {
    setBalls(prevState => (prevState === 3 ? 0 : prevState + 1));
  };

  const handleFoul = () => {
    setStrikes(prevState => (prevState === 2 ? prevState : prevState + 1));
  };

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className='App'>
      <h1>Hey batter batter batter...</h1>
      <Display strikes={strikes} balls={balls} />
      <Dashboard
        handleStrike={handleStrike}
        handleBall={handleBall}
        handleFoul={handleFoul}
        handleHit={handleHit}
      />
    </div>
  );
}

export default App;
