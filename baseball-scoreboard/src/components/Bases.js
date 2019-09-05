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
    <div>
      <div>
        <h2>1st Base: {first && 'Man On'}</h2>
        <h2>2nd Base: {second && 'Man On'}</h2>
        <h2>3rd Base: {third && 'Man On'}</h2>
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
