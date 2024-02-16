import React, { useState } from "react";

function Task9() {
  const Statistics = ({ good, neutral, bad, all }) => {
    const feedback = all > 0;
    return (
      <div>
        <h1>Statistics</h1>
        {feedback ? (
          <div>
            <p>Good : {good}</p>
            <p>Neutral : {neutral}</p>
            <p>Bad : {bad}</p>
            <p>All : {all}</p>
            <p>Average : {all === 0 ? 0 : (good - bad) / all}</p>
            <p>Positive Percentage : {all === 0 ? 0 : (good / bad) * 100} %</p>
          </div>
        ) : (
          <div>
            <h4>No feedback given</h4>
          </div>
        )}
      </div>
    );
  };

  const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handlegoodclick = () => {
      setGood(good + 1);
      setAll(all + 1);
    };
    const handleneutralclick = () => {
      setNeutral(neutral + 1);
      setAll(all + 1);
    };
    const handlebadclick = () => {
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
        <Button handleclick={handlegoodclick} text={"Good"} />
        <Button handleclick={handleneutralclick} text={"neutral"} />
        <Button handleclick={handlebadclick} text={"bad"} />
        <Statistics
          text={"Statistics"}
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
        />
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task9;
