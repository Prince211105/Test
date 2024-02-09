import React from "react";

function Jsx() {
    const App = () => {
    const now = new Date()
    const a = 10;
    const b = 10;

    return(
        <div>
            <p>To day date is{now.toString()}</p>
            <p>sum of {a} + {b} = {a + b}</p>
        </div>
    )
    }
return(
    <div>
        <App/>
    </div>
)
}
export default Jsx;

//not to use a jsx and you wrie a code same type
// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   return React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "p",
//       null,
//       now.toString(),
//       React.createElement("p", null, a, "+", b, "=", a + b)
//     )
//   );
// };
// export default App;
