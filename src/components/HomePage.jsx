// App.jsx
import { useState } from "react";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import "../App.css";
import useSearchStore from "../stores/searchStore";

function HomePage() {
  const { weatherData, isLoading, error, handleSearch } = useSearchStore();

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <WeatherDisplay
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default HomePage;
