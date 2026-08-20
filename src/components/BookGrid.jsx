import BookCard from "./BookCard";
import "../styles/BookGrid.css";

function BookGrid({ books, onBookClick }) {

    if (books.length === 0) {
        return (
            <div className="no-books">
                <div className="no-books-icon">📚</div>

                <h3>No books found</h3>

                <p>
                    Try another search or category.
                </p>
            </div>
        );
    }

    return (
        <div className="book-grid">

            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onClick={() => onBookClick(book)}
                />
            ))}

        </div>
    );
}

export default BookGrid;