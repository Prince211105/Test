import React from "react";
import { useState } from "react";
function Task10() {
  const Statisticsline = ({ text, value }) => {
    return (
      <div>
        <p>
          {text} : {value}
        </p>
      </div>
    );
  };

  const Statistics = ({ good, neutral, bad, all }) => {
    const feedback = all > 0
    return (
      <div>
        {feedback ? (
            <div>
                
        <Statisticsline text={"Good"} value={good} />
        <Statisticsline text={"neutral"} value={neutral} />
        <Statisticsline text={"bad"} value={bad} />
        <Statisticsline text={"all"} value={all} />
        <Statisticsline
          text={"Average"}
          value={all === 0 ? 0 : (good - bad) / all}
        />
        <Statisticsline
          text={"Positive Percentage"}
          value={all === 0 ? 0 : (good / all) * 100}
        />
        </div>) : (
            <div>
                <h4>No Feedback Given</h4>
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

    const Button = ({ handleclick, text }) => {
      return (
        <div>
          <button onClick={handleclick}>{text}</button>
        </div>
      );
    };

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

    return (
      <div>
        <h1>Give Feedback</h1>
        <Button text={"good"} handleclick={handlegoodclick} />
        <Button text={"neutral"} handleclick={handleneutralclick} />
        <Button text={"bad"} handleclick={handlebadclick} />

        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task10;
