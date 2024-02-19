import React from "react";

function Task3() {
  const App = () => {
    const course = {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    };
    const totalexercises = course.parts.map((s, p) => {
      console.log("what is happening", s, p);
      return s + p.exercises,0;
    });
    return (
      <div>
        {/* <Course course={course} /> */}
        <p>Total exercises : {totalexercises}</p>
      </div>
    );
  };

  return <div><App/></div>;
}

export default Task3;
