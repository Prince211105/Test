import React from "react";
import { useState } from "react";

function Task7() {
  const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");
    const handleNamechange = (event) => {
      setNewName(event.target.value);
    };

    const addName = (event) => {
      event.preventDefault();
      const nameExists = persons.find((person) => person.name === newName);

      if (nameExists) {
        alert(`${newName} This name is already in the phonebook.`);
      } else {
        setPersons([...persons, { name: newName }]);
        setNewName("");
      }
    };
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name :
            <input type="text" value={newName} onChange={handleNamechange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <App />
    </div>
  );
}

export default Task7;
