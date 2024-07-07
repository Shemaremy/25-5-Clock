import React, { useState, useEffect, useRef }  from 'react'
import './App.css'
import BreakLength from './components/Breaklength'
import SessionLength from './components/SessionLength'
import Controls from './components/Controls'
import Timer from './components/Timer'

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // Initial timeLeft in seconds
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);



  const toggleTimer = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };



  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            handlePeriodEnd();
            return prevTime; // Return the previous time to avoid negative values
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);



  useEffect(() => {
    if (timeLeft === 0) {
      handlePeriodEnd();
    }
  }, [timeLeft]);






  const handleReset = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    // Stop and rewind the audio element with id="beep"
    const beep = document.getElementById('beep');
    beep.pause();
    beep.currentTime = 0;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };







  const handleDecrementBreak = () => {
    setBreakLength(prev => Math.max(prev - 1, 1));
  };

  const handleIncrementBreak = () => {
    setBreakLength(prev => Math.min(prev + 1, 60));
  };







  const handleDecrementSession = () => {
    setSessionLength(prev => {
      const newLength = Math.max(prev - 1, 1);
      if (!isRunning) {
        setTimeLeft(newLength * 60);
      }
      return newLength;
    });
  };

  const handleIncrementSession = () => {
    setSessionLength(prev => {
      const newLength = Math.min(prev + 1, 60);
      if (!isRunning) {
        setTimeLeft(newLength * 60);
      }
      return newLength;
    });
  };






  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  const handlePeriodEnd = () => {
    // Play the beep sound
    const beep = document.getElementById('beep');
    beep.play();

    if (timerLabel === 'Session') {
      // Switch to break
      setTimerLabel('Break');
      setTimeLeft(breakLength * 60);

    } else {
      // Switch to session
      setTimerLabel('Session');
      setTimeLeft(sessionLength * 60);
    }
  };




  return (
    <div className="App">
      <div className='upper'>
        <h1 className='clock-heading'>25 + 5 Clock</h1>
      </div>
      <div className='lower'>
        <div className='upper_settings'>
          <BreakLength  breakLength={breakLength} decrementBreak={handleDecrementBreak} incrementBreak={handleIncrementBreak} isRunning={isRunning}/>
          <SessionLength sessionLength={sessionLength} decrementSession={handleDecrementSession} incrementSession={handleIncrementSession} isRunning={isRunning}/>
        </div>

        <Timer timerLabel={timerLabel} timeLeft={formatTime(timeLeft)}  />
        <Controls reset={handleReset} startStop={toggleTimer} />
      </div>
      <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  )
}

export default App
