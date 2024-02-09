import React from "react";
//you have use the object method to react and not a use filter to it was genrate error.
//jayare ene print karhiye tayre varible nu name je pn hoy ane index je hoy eni pachd (.) kari ne je pn run karava magta hoy object mathi e lakhvu
function Rederobj() {
  const App = () => {
    const friends = [
      { name: "Prem", age: 20 },
      { name: "Pinkal", age: 30 },
    ];
    console.log(friends[0],friends[1])
    return (
      <div>
        <p>
          Name : {friends[0].name} age : {friends[0].age}
        </p>
        <p>
          Name : {friends[1].name} age : {friends[1].age}
        </p>
      </div>
    );
  };
// ham isko run karva sakate he react me but hame chiye esa e nai milega a method thi nai thy but thase pn a methos thi nai thy
    const Hello = () => {
        const Bestfriend = ["Prince","Prem","Pinkal"]
        console.log(Bestfriend)
        return(
            <div>
                <h4>{Bestfriend}</h4>
            </div>
        )
    }
    
  return (
    <div>
      <App />
      <Hello/>
    </div>
  );
}

export default Rederobj;
