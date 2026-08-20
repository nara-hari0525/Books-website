import "../styles/Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span className="logo-icon">📚</span>
        <span>BookShelf</span>
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#categories">Categories</a>
      </nav>

      <button className="library-button">
        My Library
      </button>

    </header>
  );
}

export default Header;