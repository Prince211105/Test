import React from "react";

function Propscomponent() {
  const App = (props) => {
    return (
      <div>
        <img className="props-img" src={props.img} alt="" />
        <h1>{props.name} {props.age}</h1>
        <p>{props.detalis}</p>
        <button>{props.buttonname}</button>
      </div>
    );
  };

  const Hello = () => {
    const fname = "Prince";
    const age1 = 20;
    return (
      <div>
        <App
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65CL9PUdWKzi3rPpuw4rMR9wGyWGrXA4PyA&usqp=CAU"
          name="Prince Patel"
          detalis="it was study in silver oak university.he was currently intership work in setgowal media lebs llp"
          buttonname="Click show detalis"
        />
        <App name={fname} age={age1}/>
        
      </div>
      
    );
    
  };
 console.log(Hello) 
  console.log(App)
  return (
    <>
      <App
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65CL9PUdWKzi3rPpuw4rMR9wGyWGrXA4PyA&usqp=CAU"
        name="Prince Patel"
        detalis="it was study in silver oak university.he was currently intership work in setgowal media lebs llp"
        buttonname="Click show detalis"
      /><br/>
      <Hello/>

    </>
  );
}

export default Propscomponent;

