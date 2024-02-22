import axios from "axios";
import React, { useEffect, useState } from "react";

function Task14() {
  const App = () => {
    const [persons, setpersons] = useState([]);
    const [newname, setnewname] = useState("");
    const [newnumber, setnewnumber] = useState("");
    const [search, setsearch] = useState("");
    const [editingPersone, seteditingPerson] = useState(null);
    useEffect(() => {
      axios.get("http://localhost:3001/persons").then((response) => {
        setpersons(response.data);
      });
    });

    const addNote = (event) => {
      
      event.preventDefault();
      const Newobject = {
        name: newname,
        number: newnumber,
      };
      axios
        .post("http://localhost:3001/persons", Newobject)
        .then((response) => {
          console.log(response);
          setpersons(persons.concat(response.data));
        });
    };

    const deletePerson = (id) => {
      const confirmed = window.confirm(
        `${newname} Delete ?`
      );
      if (confirmed) {
        axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
          setpersons(persons.filter((person) => person.id !== id));
        });
      }
    };

    const editPerson = (person) => {
      seteditingPerson(person.id);
      setnewname(person.name);
      setnewnumber(person.number);
    };

    const saveChage = (id) => {
      const confirmed = window.confirm(
        `${newname} is already added to phonebook, replace the old number with a new one?`
      );

      const updatePerson = {
        name: newname,
        number: newnumber,
      };
      if (confirmed) {
        axios
          .put(`http://localhost:3001/persons/${id}`, updatePerson)
          .then(() => {
            setpersons(
              persons.map((person) =>
                person.id === id ? { ...person, ...updatePerson } : person
              )
            );
            setnewname("");
            setnewnumber("");
            seteditingPerson(null);
          });
      }
    };

    return (
      <div>
        <h1>Phonebook</h1>

        <div>
          Search :{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <h2>Add new person</h2>
        <form onSubmit={addNote}>
          <div>
            Name :{" "}
            <input
              type="text"
              value={newname}
              onChange={(e) => setnewname(e.target.value)}
            />
          </div>
          <br />
          <div>
            Number :{" "}
            <input
              type="text"
              value={newnumber}
              onChange={(e) => setnewnumber(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">Add new</button>
          </div>
        </form>
        <h2>Phonebook Data </h2>
        <div>
          {persons.map((person) => (
            <div key={person.id}>
              {editingPersone === person.id ? (
                <div>
                  Name : <input type="text" value={newname} />
                  Number :{" "}
                  <input
                    type="text"
                    value={newnumber}
                    onChange={(e) => setnewnumber(e.target.value)}
                  />
                  <button type="submit" onClick={() => saveChage(person.id)}>
                    SaveChange
                  </button>
                </div>
              ) : (
                <p>
                  {person.name} {person.number}{" "}
                  <button type="submit" onClick={() => deletePerson(person.id)}>
                    Delete
                  </button>
                  <button type="submit" onClick={() => editPerson(person)}>
                    Edit
                  </button>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <App />
    </div>
  );
}

export default Task14;
