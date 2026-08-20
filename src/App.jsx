import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import BookGrid from "./components/BookGrid";
import BookModal from "./components/BookModal";

import books from "./data/books";

import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);

  const categories = [
    "All",
    ...new Set(books.map((book) => book.category)),
  ];

  const filteredBooks = books.filter((book) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search) ||
      book.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      <Header />

      <main className="main-container">

        <section className="hero-section">
          <div>
            <p className="hero-small">WELCOME TO BOOKSHELF</p>

            <h1>
              Discover Your
              <span> Next Great Book</span>
            </h1>

            <p className="hero-description">
              Explore our collection of inspiring stories,
              timeless classics and books that can change
              the way you think.
            </p>
          </div>
        </section>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="books-header">
          <h2>All Books</h2>

          <p>
            {filteredBooks.length} books found
          </p>
        </div>

        <BookGrid
          books={filteredBooks}
          onBookClick={setSelectedBook}
        />

      </main>

      <BookModal
        book={selectedBook}
        closeModal={() => setSelectedBook(null)}
      />

    </div>
  );
}

export default App;