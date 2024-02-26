import axios from "axios";
import React, { useState } from "react";

function Task19() {
  const App = () => {
    const [search, setsearch] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const handlesearch = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${search}`
        );
        setCountries(response.data);
        setError("");
        setSelectedCountry(null);
      } catch (error) {
        setCountries([]);
        setError("Error fetching data. Please try again.");
      }
    };
    const handleShowDetails = (country) => {
      setSelectedCountry(country);
    };
    return (
      <div>
        <h1>Country Detalis</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={handlesearch}>Search country</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          {countries.map((country) => (
            <div key={country.name.common}>
              <h2>{country.name.common}</h2>
              <button onClick={() => handleShowDetails(country)}>
                Show Details
              </button>
              {selectedCountry === country && (
                <div>
                  <br />
                  <img
                    width={90}
                    src={country.flags.svg}
                    alt={country.flags.alt}
                  />

                  <p>capital : {country.capital}</p>
                  <p>Population : {country.population}</p>

                  <p>Area: {country.area} sq km</p>

                  <p>Google Maps : {country.maps.googleMaps}</p>
                </div>
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

export default Task19;
