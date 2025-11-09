// SearchForm.jsx
import useSearchStore from "../stores/searchStore";

function SearchForm({ onSearch }) {
  const { city, setCity } = useSearchStore();

  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Enter a city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
