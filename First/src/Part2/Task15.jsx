import axios from "axios";
import React, { useEffect, useState } from "react";

function Task15() {
  const App = () => {
    const [persons, setpersons] = useState([]);
    const [newName, setnewName] = useState("");
    const [newNumber, setnewNumber] = useState("");
    const [search, setsearch] = useState("");
    const [EditingPerson, setEditingPerson] = useState(null);

    /*
    // you have get the data api methos is (GET)
    */

    useEffect(() => {
      axios.get("http://localhost:3001/persons").then((response) => {
        setpersons(response.data);
      });
    });

    /*
    // you have use this method and use to add the data in database
    
    */

    const addNote = (event) => {
      event.preventDefault();
      const confirmed = window.confirm(
        `${newName} and ${newNumber} was added to the phonebook`
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
          });
      }
    };

    /*
        this method was delete the data on database
    */

    const deletePerson = (id,name) => {
      const confirmed = window.confirm(`you have delete ${name} ?`);
      if (confirmed) {
        axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
          setpersons(persons.filter((person) => person.id !== id));
        });
      }
    };

    /*
        this method was Edit to the data and store to the databas
    */

    const Editdata = (person) => {
      setnewName(person.name);
      setnewNumber(person.number);
      setEditingPerson(person.id);
    };

    const saveChage = (id) => {
      const confirmed = window.confirm(
        `${newName} is already added to phonebook, replace the old number ${newNumber} with a new one ${newNumber}?`
      );

      if (confirmed) {
        const update = {
          name: newName,
          number: newNumber,
        };
        axios.put(`http://localhost:3001/persons/${id}`, update).then(() => {
          setpersons(
            persons.map((person) =>
              person.id === id ? { ...person, ...update } : person
            )
          );
          setnewName("");
          setnewNumber("");
          setEditingPerson(null);
        });
      }
    };

    /*
        this was filter it was work to the search any persone data and will give the data
    */

    const filterofalldata = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="phonebookdata">
        <h1>Create a PhoneBook</h1>
        <div>
     <label>Search :</label>     {" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        {/* 
            This filed was form  
        */}
        <h2>Add new people</h2>
        <form onSubmit={addNote}>
          <div>
           <label>Name :</label> {" "}
            <input
              type="text"
              value={newName}
              onChange={(e) => setnewName(e.target.value)}
            />
          </div>
          <br />
          <div>
          <label>Number :</label>  {" "}
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

        <h2>All Phonebook Data</h2>
        {/* 
            This filed is show the data 
        */}
        <div>
          {filterofalldata.map((person) => (
            <div key={person.id}>
              {EditingPerson === person.id ? (
                <div>
                    <label>Name :</label> {" "}
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setnewName(e.target.value)}
                  />&nbsp;&nbsp;
                  <label>Number :</label> {" "}
                  <input
                    type="text"
                    value={newNumber}
                    onChange={(e) => setnewNumber(e.target.value)}
                  />&nbsp;&nbsp;
                  <button onClick={() => saveChage(person.id)}>
                    Save change
                  </button>
                </div>
              ) : (
                <p>
                  {person.name} {person.number} &nbsp;
                  <button onClick={(e) => deletePerson(person.id,person.name)}>
                    Delete
                  </button>{" "}
                  &nbsp;
                  <button onClick={(e) => Editdata(person)}>Edit</button>
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

export default Task15;
