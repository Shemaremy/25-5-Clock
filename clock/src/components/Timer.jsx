import React from 'react';

const Timer = ({ timerLabel, timeLeft }) => (
  <div className='middle_clock'>
    <div className='main_clock'>
      <h2 id='timer-label'>{timerLabel}</h2>
      <div id='time-left'>{timeLeft}</div>
    </div>
  </div>
);

export default Timer;
