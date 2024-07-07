import React from 'react';

const BreakLength = ({ breakLength, decrementBreak, incrementBreak }) => (
  <div className='break_length_container'>
    <h5 id='break-label'>Break Length</h5>
    <div className='controlers'>
      <button id='break-decrement' onClick={decrementBreak}>
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      </button>
      <p id='break-length'>{breakLength}</p>
      <button id='break-increment' onClick={incrementBreak}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  </div>
);

export default BreakLength;
