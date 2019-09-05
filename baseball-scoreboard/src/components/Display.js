import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div>
        <h2>Inning: 1</h2>
        <h2>
          Strikes: <span data-testid='strikes'>{props.strikes}</span>
        </h2>
        <h2 data-testid='balls'>Balls: {props.balls}</h2>
        <h2>Outs: {props.outs}</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>Runs</th>
              <th>Errors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
            </tr>
            <tr>
              <td>Away</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
