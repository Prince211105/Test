import React, { useState } from "react";

function Task8() {
  const App = () => {
    const [persons, setPersons] = useState([
      { name: "" },
      { number: "" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const addNameNmber = (event) => {
      event.preventDefault();
      const NameExit = persons.find((person) => person.name === newName);

      if (NameExit) {
        alert(`${newName} ${newNumber} This is alreday add in phonebook`);
      } else {
        setPersons([...persons, { name: newName , number : newNumber}]);
        setNewName("");
        setNewNumber("");
      }
    };

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNameNmber}>
          <div>
            Name:{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div><br/>
          <div>
            Number:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map((person) => <p key={person}>{person.name} {person.number}</p>)}
      </div>
    );
  };

  return <div><App/></div>;
}

export default Task8;
