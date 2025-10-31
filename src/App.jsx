// App.jsx

import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Search function started!");

    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>

      <SearchForm city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherDisplay
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;
