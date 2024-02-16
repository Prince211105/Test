import React, { useState } from "react";

function Task8() {
  const Statistics = (props) => {
    return (
      <div>
        <h1>{props.text}</h1>
        <p>Good : {props.good}</p>
        <p>neutral : {props.neutral}</p>
        <p>bad : {props.bad}</p>
        <p>all : {props.all}</p>
        <p>
          Average : {props.all === 0 ? 0 : (props.good - props.bad) / props.all}
        </p>
        <p>
          Positive Percentage :{" "}
          {props.all === 0 ? 0 : (props.good / props.all) * 100}%
        </p>
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

export default Task8;
