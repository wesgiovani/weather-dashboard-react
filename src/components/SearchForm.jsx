// SearchForm.jsx

function SearchForm({ city, setCity, onSearch }) {
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
