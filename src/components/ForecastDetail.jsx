// ForecastDetail.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ForecastDetail() {
  const { city } = useParams();

  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Forecast data not found");
        const data = await res.json();
        setForecast(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!forecast) return null;

  return (
    <div>
      <h2>5-Day Forecast for {forecast.city.name}</h2>
      {forecast.list.map((item) => (
        <div key={item.dt}>
          <p>{new Date(item.dt_txt).toLocaleString()}</p>
          <p>{item.main.temp}°C</p>
          <p>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}
export default ForecastDetail;
