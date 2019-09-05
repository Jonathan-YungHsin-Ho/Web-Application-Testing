import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        <h2>Inning: 1</h2>
        <h2>Strikes: {props.strikes}</h2>
        <h2>Balls: {props.balls}</h2>
        <h2>Outs: {props.outs}</h2>
      </div>
    </div>
  );
}
