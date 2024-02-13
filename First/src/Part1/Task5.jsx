import React from "react";

function Task5() {
  const App = () => {
    const course = {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    };

    //Content

    const Content = (props) => {
        const list = props.course.parts.map(item => {
            return (
                <div>
                    <p>{item.name} : {item.exercises}</p>
                </div>
            )
        })
        return list
    }

    const Total = (props) => {
        var num = 0
        const list = props.course.parts.map(item => {
            num = num + item.exercises
            return num
        })
        return(
        <div>
            <p>total {num}</p>
        </div>
        )
    }
    return (
      <div>
        <h1>{course.name}</h1>
        <Content course={course}/>
        <Total course={course}/>
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task5;
