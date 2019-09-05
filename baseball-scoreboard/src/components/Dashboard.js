import React from 'react';

export default function Dashboard(props) {
  return (
    <div className='dashboard'>
      <button onClick={props.handleStrike}>Strike</button>
      <button onClick={props.handleBall}>Ball</button>
      <button onClick={props.handleFoul}>Foul</button>
      <button onClick={props.handleHit}>Hit</button>
      <button onClick={props.handleOuts}>Out</button>
      <br />
      <button onClick={() => props.handleGuestRun(1)}>Guest Score</button>
      <button onClick={props.handleGuestError}>Guest Error</button>
      <button onClick={() => props.handleHomeRun(1)}>Home Score</button>
      <button onClick={props.handleHomeError}>Home Error</button>
      <br />
      <button onClick={props.handleInning}>Next Inning</button>
      <button onClick={props.handleRestart}>Restart Game</button>
    </div>
  );
}
