// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ForecastDetail from "./components/ForecastDetail";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <h1>Weather Dashboard</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/forecast/:city" element={<ForecastDetail />} />
      </Routes>
    </div>
  );
}

export default App;
