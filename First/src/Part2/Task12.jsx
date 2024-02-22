import axios from "axios";
import React, { useState, useEffect } from "react";

function Task12() {
  const App = () => {
    const [persons, setpersons] = useState([]);
    const [newname, setnewname] = useState("");
    const [newnumber, setnewnumber] = useState("");
    const [search, setsearch] = useState("");

    useEffect(() => {
      axios.get("http://localhost:3001/persons").then((response) => {
        setpersons(response.data);
      });
    });

    const addNote = (event) => {
      event.preventDefault();
      const confirmed = window.confirm(`Add the data`);
      if (confirmed) {
        const newobject = {
          name: newname,
          number: newnumber,
        };
        axios
          .post("http://localhost:3001/persons", newobject)
          .then((response) => {
            setpersons(persons.concat(response.data));
          });
      }
    };

    const filterdataonphonebook = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <h2>Phonebook</h2>

        <div>
          Search :
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <h3>Add a new</h3>
        <form onSubmit={addNote}>
          <div>
            Name :
            <input
              type="text"
              value={newname}
              onChange={(e) => setnewname(e.target.value)}
            />
          </div>{" "}
          <br />
          <div>
            Number :
            <input
              type="text"
              value={newnumber}
              onChange={(e) => setnewnumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add new</button>
          </div>
        </form>
        <h3>Numbers</h3>
        {filterdataonphonebook.map((person, index) => (
          <p key={index}>
            {person.name} : {person.number}
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

export default Task12;
