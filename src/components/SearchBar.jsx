import "../styles/SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">

      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search books, authors or categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <button
          className="clear-search"
          onClick={() => setSearchTerm("")}
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;