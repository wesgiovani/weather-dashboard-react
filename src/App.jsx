// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ForecastDetail from "./components/ForecastDetail";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* 1. Navigation Bar */}
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <h1>Weather Dashboard</h1>

      {/* 2. Define Your "Pages" */}
      <Routes>
        {/* Route 1: The Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route 2: The Details Page */}
        <Route path="/forecast/:city" element={<ForecastDetail />} />
      </Routes>
    </div>
  );
}

export default App;
