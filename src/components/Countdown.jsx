import React, { useEffect, useState, useRef } from "react";
import "../styles/Countdown.css";

function Countdown() {
  const TARGET_KEY = "crochet_target_time";
  const defaultTarget = () => {
    const saved = localStorage.getItem(TARGET_KEY);
    if (saved) return new Date(saved);

    const newTarget = new Date(Date.now() + 1020 * 60 * 60 * 1000); // 1020 hrs
    localStorage.setItem(TARGET_KEY, newTarget.toISOString());
    return newTarget;
  };

  const targetTimeRef = useRef(defaultTarget());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetTimeRef.current - now;

    const totalSeconds = Math.max(0, Math.floor(diff / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-grid">
      <div className="luxury-time">
        <div className="time-box">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <p>hours</p>
        </div>
        <div className="time-box">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <p>minutes</p>
        </div>
        <div className="time-box">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <p>seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
