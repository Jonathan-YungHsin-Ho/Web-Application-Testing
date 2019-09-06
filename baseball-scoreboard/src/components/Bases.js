import React, { useState } from 'react';

export default function Bases(props) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

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
  };

  const handleDouble = () => {
    setFirst(false);
    setSecond(true);
    setThird(() => {
      if (first) {
        return true;
      }
    });
  };

  const handleTriple = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
  };

  const handleHomeRun = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
  };

  return (
    <div className='field'>
      <h2>Runs Scored: </h2>
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
      </div>
    </div>
  );
}
