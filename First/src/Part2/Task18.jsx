import axios from "axios";
import React, { useState } from "react";

function Task18() {
  const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${searchTerm}`
        );
        setCountries(response.data);
        setError("");
      } catch (err) {
        setCountries([]);
        setError("Error fetching data. Please try again.");
      }
    };

    return (
      <div>
        <h1>Country Information App</h1>
        <input
          type="text"
          placeholder="Enter country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              {/* Add more information as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <App />
    </div>
  );
}

export default Task18;
