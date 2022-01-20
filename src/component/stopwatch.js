import { useState, useEffect } from "react";
import "../scss/stopwatch.scss";
function Stopwatch(params) {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  useEffect(() => {
    if (timerOn) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [timerOn]);
  return (
    <div>
      <div className="stopwatch-container">
        <div className="stopwatch-card">
          <div className="stopwatch-card--header">
            <h2>Stopwatch Timer</h2>
          </div>
          <div className="stopwatch-card--body">
            <div className="timer">
              <div className="display">
                <span className="minutes">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :{" "}
                </span>
                <span className="seconds">
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :{" "}
                </span>
                <span className="mseconds">
                  {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
              </div>
            </div>
            <div className="bg-border"></div>
          </div>
          <div className="stopwatch-card--footer">
            <div className="start">
              {!timerOn && time === 0 && (
                <button onClick={() => setTimerOn(true)}>Start</button>
              )}
            </div>
            <div className="stop">
              {timerOn && (
                <button onClick={() => setTimerOn(false)}>Pause</button>
              )}
            </div>
            <div className="resume">
              {!timerOn && time > 0 && (
                <button onClick={() => setTimerOn(true)}>Resume</button>
              )}
            </div>
            <div className="restart">
              {!timerOn && time > 0 && (
                <button onClick={() => setTime(0)}>Reset</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stopwatch;
