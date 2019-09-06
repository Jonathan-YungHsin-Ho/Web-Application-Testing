import React, { useState } from 'react';

export default function Bases(props) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [runsScored, setRunsScored] = useState(0);

  const handleSingle = () => {
    setFirst(true);
    setSecond(() => {
      if (first) {
        return true;
      }
    });
    setThird(() => {
      if (second) {
        return true;
      }
    });
    setRunsScored(prevState => {
      if (third) {
        return prevState + 1;
      } else {
        return prevState;
      }
    });
  };

  const handleDouble = () => {
    setFirst(false);
    setSecond(true);
    setThird(() => {
      if (first) {
        return true;
      }
    });
    setRunsScored(prevState => {
      let runs = 0;
      if (third) {
        runs++;
      }
      if (second) {
        runs++;
      }
      return prevState + runs;
    });
  };

  const handleTriple = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setRunsScored(prevState => {
      let runs = 0;
      if (third) {
        runs++;
      }
      if (second) {
        runs++;
      }
      if (first) {
        runs++;
      }
      return prevState + runs;
    });
  };

  const handleHomeRun = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setRunsScored(prevState => {
      let runs = 1;
      if (third) {
        runs++;
      }
      if (second) {
        runs++;
      }
      if (first) {
        runs++;
      }
      return prevState + runs;
    });
  };

  const handleResetRuns = () => setRunsScored(0);

  return (
    <div className='field'>
      <h2>Runs Scored: {runsScored}</h2>
      <div className='bases'>
        <h3>
          <div className='base'>{second ? '⚾' : '⬜'}</div>
        </h3>
        <div className='first-and-third'>
          <h3>
            <div className='base'>{third ? '⚾' : '⬜'}</div>
          </h3>
          <h3>
            <div className='base'> {first ? '⚾' : '⬜'}</div>
          </h3>
        </div>
      </div>
      <div>
        <button onClick={handleSingle}>Single</button>
        <button onClick={handleDouble}>Double</button>
        <button onClick={handleTriple}>Triple</button>
        <button onClick={handleHomeRun}>Homerun</button>
        <button onClick={handleResetRuns}>Reset Runs</button>
      </div>
    </div>
  );
}
