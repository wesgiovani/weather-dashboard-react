function WeatherDisplay({ weatherData, isLoading, error }) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!weatherData) {
    return <h2>Search for a city</h2>;
  }

  return (
    <div className="weather-display">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
