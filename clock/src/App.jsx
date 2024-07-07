import React from 'react'
import './App.css'
import BreakLength from './components/SessionLength'
import SessionLength from './components/SessionLength'
import Controls from './components/Controls'
import Timer from './components/Timer'

function App() {

  return (
    <div className="App">
      <div className='upper'>
        <h1 className='clock-heading'>25 + 5 Clock</h1>
      </div>
      <div className='lower'>
        <div className='upper_settings'>
          <div className='break_length_container'>
            <h5 id='break-label'>Break Length</h5>
            <div className='controlers'>
              <button id='break-decrement'><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
              <p id='break-length'>5</p>
              <button id='break-increment'><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className='session_length_container'>
            <h5 id='session-label'>Session Length</h5>
            <div className='controlers2'>
              <button id='session-decrement'><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
              <p id='session-length'>25</p>
              <button id='session-increment'><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div className='middle_clock'>
          <div className='main_clock'>
            <h2 id='timer-label'>Session</h2>
            <div id='time-left'>25:00</div>
          </div>
        </div>
        <div className='lower_settings'>
          <button id='start_stop'>
            <i className="fa fa-play" aria-hidden="true"></i>
            <i className="fa fa-pause" aria-hidden="true"></i>
          </button>
          <button id='reset'>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
