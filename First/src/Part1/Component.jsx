import React from "react";

function Component() {
  //It is arrow
  const App = () => {
    const now = new Date();
    const a = 10;
    const b = 20;
    console.log(now, a + b * a);
    return (
      <div>
        <p>Friday Date is a {now.toString()}</p>
        {/* <h1>Hello World</h1> */}
        <p>
          {a} + {b} * {a} = {a + b * a}
        </p>
      </div>
    );
  };
//use to the Many component create 
  const Game = () => {
    const Firstname = "Prince ";
    const Surname = "Patel";

    return (
      <div>
        <p>
          {Firstname} {Surname}
        </p>
        <App />
      </div>
    );
  };
  //It is a regular type function
  // function App() {
  //     return <div><h1>Hello World</h1></div>
  // }
  return (
    <div>
      <Game />
      <Game />
      <Game />
    </div>
  );
}

export default Component;

// const App = () => {
//             console.log("Prince Patel")
//             return(
//             <div>
//                 <h1>Hello World</h1>
//             </div>
//         )
//         }
//         export default App
