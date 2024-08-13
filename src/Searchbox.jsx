import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";

export default function Searchbox({ updateinfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "83527c27c292303d9ac28154664c66ce";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        setError("No cities found");
        return null;
      }

      setError("");
      return {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      setError("An error occurred while fetching the data.");
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateinfo(newInfo);
      setCity("");
    }
  };

  return (
    <div className="searchbox">
      <h3 className="heading">Search for the weather</h3>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          id="city"
          label="Enter a City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="textfield"
        />
        <Button variant="contained" type="submit" className="button">
          Search
        </Button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
