import React, { useState, useEffect, useRef } from "react";

export default function WatchStop2() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const centiseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}:${String(centiseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div >
      <div className="container">
        <p>With UseRef Hook</p>
        <div>{formatTime(time)}</div>
        <div className="btn">
          <button onClick={handleStart} id="btn1">
            Start
          </button>
          <button onClick={handleStop} id="btn2">
            Stop
          </button>
          <button onClick={handleReset} id="btn3">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
