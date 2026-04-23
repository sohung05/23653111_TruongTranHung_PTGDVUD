import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div style={{ textAlign: "center", fontSize: "24px", marginTop: "20px" }}>
      <h2>Digital Clock</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DigitalClock;
