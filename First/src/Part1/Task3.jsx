import React from "react";

function Task3() {
  const App = () => {
    const course = "Half Stack application development";
    const part1 = {
      name: "Fundamentals of React",
      exercises: 10,
    };
    const part2 = {
      name: "Using props to pass data",
      exercises: 7,
    };
    const part3 = {
      name: "State of a component",
      exercises: 14,
    };

    return (
      <div>
        {course}
        <br />
        {part1.name}
        <br />
        {part1.exercises}
        <br />
        {part2.name}
        <br />
        {part2.exercises}
        <br />
        {part3.name}
        <br />
        {part3.exercises}
        <h4>{part1.exercises + part2.exercises + part3.exercises}</h4>
        <br />
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task3;
