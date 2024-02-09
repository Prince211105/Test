import React from "react";

function Task1() {
  const Header = () => {
    const course = "Half Stack application development";

    return (
      <div>
        <p>Cource Name : {course}</p><br/>
      </div>
    );
  };
  const Content = () => {
    const part1 = "Fundamentals of React";
    const part2 = "Using props to pass data";
    const part3 = "State of a component";

    return (
      <div>
        <p>Content : {part1}</p>
        <p>Content : {part2}</p>
        <p>Content : {part3}</p><br/>
      </div>
    );
  };
  const Total = () => {
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    return (
      <h4>Total of all exercises : {exercises1 + exercises2 + exercises3}</h4>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
}

export default Task1;
