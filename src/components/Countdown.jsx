// src/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ initialDays = 0, initialHours = 0, initialMinutes = 0, initialSeconds = 0, classname }) => {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(myInterval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [seconds, minutes, hours, days]);

  return (
    <div className={`${classname?.container} count-down-container`}>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <h1>Time is up!</h1>
      ) : (
        <div className={`${classname?.item}`}>
          <p>
            {days < 10 ? `0${days}` : days}
          </p>
          <span>:</span>
          <p>
            {hours < 10 ? `0${hours}` : hours}
          </p>
          <span>:</span>
          <p>
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
          <span>:</span>
          <p>
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
      )}
    </div>
  );
}

export default Countdown;
