import React from "react";

function Task2() {
  const Part = (props) => {
    return (
      <div>
        <p>{props.name} {props.age}</p>
        <p></p>
      </div>
    );
  };
  return (<div>
    <Part 
    name = "Prince"
    age = "21"
    />
    <Part 
    name = "Prem"
    age = "22"
    />
    <Part 
    name = "Pinkal"
    age = "30"
    />
  </div>);
}

export default Task2;
