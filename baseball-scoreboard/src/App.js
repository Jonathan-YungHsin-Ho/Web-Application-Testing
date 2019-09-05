import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import Bases from './components/Bases';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);
  const [inning, setInning] = useState(1);
  const [homeErrors, setHomeErrors] = useState(0);
  const [guestErrors, setGuestErrors] = useState(0);
  const [homeRuns, setHomeRuns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [guestRuns, setGuestRuns] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

  const handleOuts = () => {
    setOuts(prevState => (prevState === 2 ? 0 : prevState + 1));
  };

  const handleRuns = (array, runs) => {
    return array.map((element, index) => {
      if (index === inning - 1) {
        element = element + runs;
      }
      return element;
    });
  };

  const handleHomeRun = runs => {
    setHomeRuns(prevState => handleRuns(prevState, runs));
  };

  const handleGuestRun = runs => {
    setGuestRuns(prevState => handleRuns(prevState, runs));
  };

  const handleHomeError = () => {
    setHomeErrors(prevState => prevState + 1);
  };

  const handleGuestError = () => {
    setGuestErrors(prevState => prevState + 1);
  };

  const handleInning = () => {
    setInning(prevState => prevState + 1);
  };

  const handleRestart = () => {
    setInning(1);
    setStrikes(0);
    setBalls(0);
    setOuts(0);
    setHomeErrors(0);
    setGuestErrors(0);
    setHomeRuns([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setGuestRuns([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  return (
    <div className='App'>
      <h1>Hey batter batter batter...</h1>
      <Display
        strikes={strikes}
        balls={balls}
        outs={outs}
        inning={inning}
        homeRuns={homeRuns}
        guestRuns={guestRuns}
        homeErrors={homeErrors}
        guestErrors={guestErrors}
      />
      <Dashboard
        handleStrike={handleStrike}
        handleBall={handleBall}
        handleFoul={handleFoul}
        handleHit={handleHit}
        handleOuts={handleOuts}
        handleHomeRun={handleHomeRun}
        handleGuestRun={handleGuestRun}
        handleHomeError={handleHomeError}
        handleGuestError={handleGuestError}
        handleInning={handleInning}
        handleRestart={handleRestart}
      />
      <Bases />
    </div>
  );
}

export default App;
