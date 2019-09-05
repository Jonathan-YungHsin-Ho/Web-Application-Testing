import React from 'react';

export default function Display(props) {
  return (
    <div>
      <div className='inning-stats'>
        <h2>
          Inning: <span>{props.inning}</span>
        </h2>
        <h2>
          Strikes: <span data-testid='strikes'>{props.strikes}</span>
        </h2>
        <h2 data-testid='balls'>
          Balls: <span>{props.balls}</span>
        </h2>
        <h2>
          Outs: <span>{props.outs}</span>
        </h2>
        <br />
      </div>
      <div className='game-stats'>
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
              <th>Guest</th>
              <td>{props.guestRuns[0]}</td>
              <td>{props.guestRuns[1]}</td>
              <td>{props.guestRuns[2]}</td>
              <td>{props.guestRuns[3]}</td>
              <td>{props.guestRuns[4]}</td>
              <td>{props.guestRuns[5]}</td>
              <td>{props.guestRuns[6]}</td>
              <td>{props.guestRuns[7]}</td>
              <td>{props.guestRuns[8]}</td>
              <td>{props.guestRuns.reduce((acc, val) => acc + val, 0)}</td>
              <td>{props.guestErrors}</td>
            </tr>
            <tr>
              <th>Home</th>
              <td>{props.homeRuns[0]}</td>
              <td>{props.homeRuns[1]}</td>
              <td>{props.homeRuns[2]}</td>
              <td>{props.homeRuns[3]}</td>
              <td>{props.homeRuns[4]}</td>
              <td>{props.homeRuns[5]}</td>
              <td>{props.homeRuns[6]}</td>
              <td>{props.homeRuns[7]}</td>
              <td>{props.homeRuns[8]}</td>
              <td>{props.homeRuns.reduce((acc, val) => acc + val, 0)}</td>
              <td>{props.homeErrors}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
