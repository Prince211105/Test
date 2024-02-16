import React from "react";
import { useState } from "react";

function Task6() {
  const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleclickgood = () => setGood(good + 1);

    const handleclickneutral = () => setNeutral(neutral + 1);

    const handleclickbad = () => setBad(bad + 1);

    const Button = ({ handleclick, text }) => {
      return (
        <div>
          <button onClick={handleclick}>{text}</button>
        </div>
      );
    };

    return (
      <div>
        <h1>Give frrdback</h1>
        <Button handleclick={handleclickgood} text={"good"} />
        <Button handleclick={handleclickneutral} text={"neutral"} />
        <Button handleclick={handleclickbad} text={"bad"} />
        <h2>Statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task6;
