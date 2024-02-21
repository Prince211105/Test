import React, { useEffect, useState } from "react";
import axios from "axios";
function Task11() {
  const App = () => {
    const [persons, setPersons] = useState([]);
    const [newname, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setsearch] = useState("");

    useEffect(() => {
      axios.get("http://localhost:3001/persons").then((response) => {
        setPersons(response.data);
      });
    },[]);

    const addPeople = (event) => {
      event.preventDefault();

      const AddNewPeople = persons.find((person) => person.name === newname);
      if (AddNewPeople) {
        alert(`${newname} ${newNumber} This is a alredy add in the phonebook`);
      }
      setPersons([...persons, { name: newname, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    };
    const filterdataonphonebook = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="Phonrbook">
        <h2>Phonebook</h2>

        <div>
          Search : {""}
          <input
            type="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <h3>Add a new people in phonebook</h3>
        <form onSubmit={addPeople}>
          <div>
            Name : {""}
            <input
              type="text"
              value={newname}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <br />
          <div>
            Number : {""}
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">Add new</button>
          </div>
        </form>

        <h3>Numbers</h3>

        {filterdataonphonebook.map((person, index) => (
          <p key={index}>
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

export default Task11;
