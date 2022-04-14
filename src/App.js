import { useState, useEffect } from "react";

const oneSecond = 1000; // one second same as 1000ms
const counterTimer = 25 * 60; //timedown minutes

function App() {
  const [Counter, setCounter] = useState(counterTimer);

  useEffect(() => {
      setTimeout(() => {
        setCounter((state) => state - 1);
      }, oneSecond);
    }, [Counter]);
  
  const mm = Math.floor(Counter / 60);
  const ss = Math.floor(Counter % 60);

  return (
    <>
      <div className="timer">
        <h1> Cronometro</h1>

        <span>{String(mm).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(ss).padStart(2, "0")}</span>
      </div>
      <div className="Menu-button">
        <button type="button" >
          Start
        </button>
        <button type="button" >
          Pause
        </button>
        <button type="button" >
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
