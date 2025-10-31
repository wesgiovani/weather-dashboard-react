// App.jsx
import { useState } from "react";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import "../App.css";

function HomePage() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

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
    <>
      <SearchForm city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherDisplay
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default HomePage;
