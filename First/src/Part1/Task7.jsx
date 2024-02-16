import React, { useState } from "react";

function Task7() {
  const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleclickgood = () => {
      setGood(good + 1);
      setAll(all + 1);
    };

    const handleclickneutral = () => {
      setNeutral(neutral + 1);
      setAll(all + 1);
    };

    const handleclickbad = () => {
      setBad(bad + 1);
      setAll(all + 1);
    };

    const Button = ({ handleclick, text }) => {
      return (
        <div>
          <button onClick={handleclick}>{text}</button>
        </div>
      );
    };

    return (
      <div>
        <h1>Give feedback</h1>
        <Button handleclick={handleclickgood} text={"good"} />
        <Button handleclick={handleclickneutral} text={"neutral"} />
        <Button handleclick={handleclickbad} text={"bad"} />
        <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>Total: {all}</p>
        <p>Average: {all === 0 ? 0 : (good - bad) / all}</p>
        <p>Positive Percentage: {all === 0 ? 0 : (good / all) * 100}%</p>
      </div>
    );
  };

  return (
    <div>
      <App />
    </div>
  );
}

export default Task7;
