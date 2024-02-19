import React from "react";

function Task1() {
  const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map((courses) => (
          <p key={courses.id}>
            {courses.name} : {courses.exercises}
          </p>
        ))}
      </div>
    );
  };
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    };
    const totalexercises = course.parts.reduce(
      (sum, part) => sum + part.exercises,
      0
    );
    return (
      <div>
        <Course course={course} />
        <p>Total exercises : {totalexercises}</p>
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task1;
