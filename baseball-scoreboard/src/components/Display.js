import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        <h2>Strikes: {props.strikes}</h2>
        <h2>Balls: {props.balls}</h2>
      </div>
    </div>
  );
}
