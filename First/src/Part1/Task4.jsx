import React from "react";

function Task4() {
  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    );
  };
  const Content = (props) => {
    const Part = props.parts.map(list => {
        return (
            <div>
                <p>{list.name} : {list.exercises}</p>
            </div>
        )
    })
    return Part;
  }
const Total = (props) => {
    var totalvalue = 0
    const totallist = props.parts.map(item => {
        totalvalue = totalvalue + item.exercises
    })
    return(
        <div>
            <p>total exercises is : {totalvalue}</p>
        </div>
    )
}
  const App = () => {
    let course = "Half Stack application development";
    let parts = [
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
    ];

    return (
      <div>
        <Header course={"Prince"} />
        <Content parts={parts}/>
        <Total parts={parts}/>
      </div>
    );

    //Header
  };
  return (
    <div>
      <App />
    </div>
  );
}
export default Task4;
