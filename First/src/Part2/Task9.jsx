import React from "react";
import { useState } from "react";
function Task9() {
  const App = () => {
    const [persons, setPersons] = useState([
      { name: "Arto Hellas", number: 9265369743 },
      { name: "Prince Patel", number: 9265369742 },
      { name: "Prem Patel", number: 9265369744 },
      { name: "Pinkal Patel", number: 9265369745 },
      { name: "Hardik Patel", number: 9265369746 },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setnewNumber] = useState("");
    const [search, setsearch] = useState("");

    const addNameNumber = (event) => {
      event.preventDefault();

      const Exitnamenumber = persons.find((person) => person.name === newName);
      if (Exitnamenumber) {
        alert(`${newName} ${newNumber} This is alredy add in phonebook`);
      }
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setnewNumber("");
    };

    const filterperson = persons.filter((person) =>
      person.name.toUpperCase().includes(search.toUpperCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNameNumber}>
          <div>
            name:{" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>{" "}
          <br />
          <div>
            number:{" "}
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setnewNumber(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">add</button>
          </div>
          <br />
          <div>
            Search bar :{" "}
            <input
              type="search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
        </form>
        <h2>Numbers</h2>
        {filterperson.map((person) => (
          <p key={person}>
            {person.name} {person.number}
          </p>
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

export default Task9;
