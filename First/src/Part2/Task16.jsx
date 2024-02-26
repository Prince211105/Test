import axios from "axios";
import React, { useEffect, useState } from "react";

function Task16() {
  const App = () => {
    const [persons, setpersons] = useState([]);
    const [newName, setnewName] = useState("");
    const [newNumber, setnewNumber] = useState("");
    const [search, setsearch] = useState("");
    const [EditingPerson, setEditingPerson] = useState(null);
    const [notification, setNotification] = useState(null);
    useEffect(() => {
      axios.get("http://localhost:3001/persons").then((response) => {
        setpersons(response.data);
      })
    }, [notification]);

    const shownotification = (message) => {
      setNotification(message);
      setTimeout(() => {
        setNotification(null);
      }, 10000);
    };

    const addNote = (event) => {
      event.preventDefault();
      const confirmed = window.confirm(
        `${newName} and ${newNumber} is add the data`
      );
      if (confirmed) {
        const newObject = {
          name: newName,
          number: newNumber,
        };
        setpersons([...persons, { name: newName, number: newNumber }]);
        setnewName("");
        setnewNumber("");
        axios
          .post("http://localhost:3001/persons", newObject)
          .then((response) => {
            setpersons(persons.concat(response.data));
            shownotification(`${newName} added successfully!`);
          }).catch((error) => {
            alert(`the note is already delete ${newName}`)
          })
        setnewName("");
        setnewNumber("");
      }
    };

    const deletedata = (id, name) => {
      const confirmed = window.confirm(`${name} Delete ?`);
      if (confirmed) {
        axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
          setpersons(persons.filter((person) => person.id === id));
          shownotification("Person deleted successfully!");
        });
      }
    };

    const Editdata = (person) => {
      setEditingPerson(person.id);
      setnewName(person.name);
      setnewNumber(person.number);
    };

    const saveChange = (id) => {
      const confirmed = window.confirm(
        ` you have change this data ${newName} and ${newNumber}.`
      );
      if (confirmed) {
        const newobject = {
          name: newName,
          number: newNumber,
        };
        axios.put(`http://localhost:3001/persons/${id}`, newobject).then(() => {
          setpersons(
            persons.map((person) =>
              person.id === id ? { ...person, ...newobject } : person
            )
          );
          setnewName("");
          setnewNumber("");
          setEditingPerson(null);
          shownotification("Changes save successfully!");
        });
      }
    };
    const filterofalldata = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        
      <div>
        <h1>Create a phonebook</h1>
        {notification && (
          <div className="notification" style={{ color: "green" }}>
            {notification}
          </div>
        )}
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
              value={newName}
              onChange={(e) => setnewName(e.target.value)}
            />
          </div>
          <br />
          <div>
            Number :{" "}
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setnewNumber(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">Add new</button>
          </div>
        </form>

        <h2>Phonebook Data</h2>
        <div>
          {filterofalldata.map((person) => (
            <div key={person.id}>
              {EditingPerson === person.id ? (
                <div>
                  Name : <input type="text" value={newName} />
                  &nbsp;&nbsp; Number :{" "}
                  <input
                    type="text"
                    value={newNumber}
                    onChange={(e) => setnewNumber(e.target.value)}
                  />
                  &nbsp;&nbsp;
                  <button onClick={() => saveChange(person.id)}>
                    Save Change
                  </button>
                </div>
              ) : (
                <p>
                  {person.name} {person.number}&nbsp;&nbsp;
                  <button onClick={() => deletedata(person.id, person.name)}>
                    Delete
                  </button>
                  <button onClick={() => Editdata(person)}>Edit</button>
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

export default Task16;
