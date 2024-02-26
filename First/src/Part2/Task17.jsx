import axios from "axios";
import React, { useEffect, useState } from "react";

function Task17() {
  const App = () => {
    const [persons, setpersons] = useState([]);
    const [newname, setnewname] = useState("");
    const [newnumber, setnewnumber] = useState("");
    const [search, setsearch] = useState("");
    const [Editing, setEditing] = useState(null);
    const [successfully, setSuccessMessage] = useState(null);
    const [Error, setErrorMessage] = useState(null);

    useEffect(() => {
      axios
        .get(`http://localhost:3001/persons`)
        .then((response) => {
          setpersons(response.data);
        })
        .catch((error) => {
          setErrorMessage(`failed fetch data`);
          console.log(error);
        });
      setTimeout(() => {
        setSuccessMessage();
        setErrorMessage();
      }, 3000);
    }, []);

    const addNote = (event) => {
      event.preventDefault();
      const confirmed = window.confirm(
        `${newname} and ${newnumber} add this data in phonebook`
      );
      if (confirmed) {
        const newobject = {
          name: newname,
          number: newnumber,
        };
        setpersons([...persons, { name: newname, number: newnumber }]);
        setnewname("");
        setnewnumber("");

        axios
          .post(`http://localhost:3001/persons`, newobject)
          .then((response) => {
            setpersons(persons.concat(response.data));
            setSuccessMessage(`Add data successfully!`);
          })
          .catch((error) => {
            setErrorMessage(`failed add data`);
            console.log(error);
          });
          setTimeout(() => {
            setSuccessMessage();
            setErrorMessage();
          }, 3000);
      }
    };
    const deletedata = (id, name) => {
      const confirmed = window.confirm(`${name} Delete ?`);
      if (confirmed) {
        axios
          .delete(`http://localhost:3001/persons/${id}`)
          .then(() => {
            setpersons(persons.filter((person) => person.id === id));
            setSuccessMessage(`Delete data successfully!`);
          })
          .catch((error) => {
            setErrorMessage(`failed delete data`);
            console.log(error);
          });
          setTimeout(() => {
            setSuccessMessage();
            setErrorMessage();
          }, 3000);
      }
    };
    const editdata = (person) => {
      setEditing(person.id);
      setnewname(person.name);
      setnewnumber(person.number);
    };

    const savedata = (id) => {
      const confrimed = window.confirm(`change name and number!`);
      if (confrimed) {
        const newobject = {
          name: newname,
          number: newnumber,
        };
        axios
          .put(`http://localhost:3001/persons/${id}`, newobject)
          .then(() => {
            setpersons(
              persons.map((person) =>
                person.id === id ? { ...person, ...newobject } : person
              )
            );
          })
          .catch((error) => {
            setErrorMessage(`failed change data`);
            console.log(error);
          });
          setTimeout(() => {
            setSuccessMessage();
            setErrorMessage();
          }, 3000);
        setSuccessMessage(`Change data successfully!`);
        setnewname("");
        setnewnumber("");
        setEditing(null);
      }
    };
    const FilterData = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div>
        <h1>Create a phonebook</h1>
        {successfully && (
          <div style={{ color: "green" }} className="notification">{successfully}</div>
        )}{" "}
        {Error && <div style={{ color: "red" }} className="notification">{Error}</div>}
        <br />
        <div>
          Search :{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
        <h2>Add new data</h2>
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
        <h2>Phonebook Data</h2>
        <div>
          {FilterData.map((person, index) => (
            <div key={index}>
              {Editing === person.id ? (
                <div>
                  Name :{" "}
                  <input
                    type="text"
                    value={newname}
                    onChange={(e) => setnewname(e.target.value)}
                  />
                  &nbsp; Number :{" "}
                  <input
                    type="text"
                    value={newnumber}
                    onChange={(e) => setnewnumber(e.target.value)}
                  />
                  <button onClick={() => savedata(person.id)}>
                    Save change
                  </button>
                </div>
              ) : (
                <p>
                  {person.name} {person.number}&nbsp;&nbsp;
                  <button onClick={() => deletedata(person.id, person.name)}>
                    Delete
                  </button>
                  &nbsp;&nbsp;
                  <button onClick={() => editdata(person)}>Edit</button>
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

export default Task17;
