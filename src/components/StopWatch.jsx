import React, { useState, useRef, useEffect } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(new Date() - startTimeRef.current);
      }, 10);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = new Date() - elapsedTime;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const centiseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}:${String(centiseconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <div className="container">
        <p>Without UseRef Hook</p>
        <div>{formatTime()}</div>
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
