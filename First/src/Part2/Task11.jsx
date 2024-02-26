import React, { useEffect, useState } from "react";
import axios from "axios";
function Task11() {
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
      const Entername = persons.filter((person) => person.name === newname);
      if (Entername) {
        alert(`${newname} ${newnumber} This is alreday phonebook`);
      }
      setpersons([...persons, { name: newname, number: newnumber }]);
      setnewname("");
      setnewnumber("");
    };
    const filterphonebook = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    // const filterdataonphonebook = persons.filter((person) =>
    //   person.name.toLowerCase().includes(search.toLowerCase())
    // );
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
        {filterphonebook.map((person, index) => (
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

export default Task11;
