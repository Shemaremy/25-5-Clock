const Controls = ({ startStop, reset }) => {
  return (
    <div className='lower_settings'>
      <button id='start_stop' onClick={startStop}>
        <i className="fa fa-play" aria-hidden="true"></i>
        <i className="fa fa-pause" aria-hidden="true"></i>
      </button>
      <button id='reset' onClick={reset}>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Controls;
