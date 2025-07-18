import React, { useEffect, useState } from "react";
import "../styles/Countdown.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const tomorrow6pm = new Date();
    tomorrow6pm.setDate(now.getDate() + 1);
    tomorrow6pm.setHours(18, 0, 0, 0); // 6:00 PM
    const diff = tomorrow6pm - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

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
      <div className="countdown-text">
        <h2>Crocheting down every second</h2>
      </div>

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
