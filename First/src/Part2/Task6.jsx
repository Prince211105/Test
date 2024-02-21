import React from "react";
import { useState } from "react";
function Task6() {
  const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const addPerson = (event) => {
      event.preventDefault();
      
      setPersons([...persons, { name: newName }]);
      setNewName("");
    };

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>
            name:{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p key={person}>{person.name}</p>
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

export default Task6;
