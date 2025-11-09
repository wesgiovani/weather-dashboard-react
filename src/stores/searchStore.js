// src/stores/searchStore.js
import { create } from "zustand";

const useSearchStore = create((set, get) => ({
  city: "",
  weatherData: null,
  isLoading: false,
  error: null,

  setCity: (newCity) => set({ city: newCity }),

  handleSearch: async (event) => {
    event.preventDefault();

    set({ isLoading: true, error: null, weatherData: null });

    const city = get().city;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      set({ weatherData: data, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useSearchStore;
