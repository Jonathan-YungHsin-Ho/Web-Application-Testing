import React from 'react';

export default function Dashboard(props) {
  return (
    <div>
      <button onClick={props.handleStrike}>Strike</button>
      <button onClick={props.handleBall}>Ball</button>
      <button onClick={props.handleFoul}>Foul</button>
      <button onClick={props.handleHit}>Hit</button>
      <button onClick={props.handleOuts}>Out</button>
    </div>
  );
}
