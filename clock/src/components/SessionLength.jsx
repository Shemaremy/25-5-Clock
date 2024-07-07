const SessionLength = ({ sessionLength, decrementSession, incrementSession, isRunning }) => {
  return (
    <div className='session_length_container'>
      <h5 id='session-label'>Session Length</h5>
      <div className='controlers2'>
        <button id='session-decrement' onClick={decrementSession} disabled={isRunning}>
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
        <p id='session-length'>{sessionLength}</p>
        <button id='session-increment' onClick={incrementSession} disabled={isRunning}>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
