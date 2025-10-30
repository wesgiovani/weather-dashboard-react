import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>

      <SearchForm />
      <WeatherDisplay />
    </div>
  );
}

export default App;
