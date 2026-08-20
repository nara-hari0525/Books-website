import "../styles/BookCard.css";

function BookCard({ book, onClick }) {
    return (
        <article
            className="book-card"
            onClick={onClick}
        >

            <div className="book-image-container">

                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="book-image"
                />

                <div className="category-badge">
                    {book.category}
                </div>

            </div>

            <div className="book-info">

                <h3 className="book-title">
                    {book.title}
                </h3>

                <p className="book-author">
                    {book.author}
                </p>

                <div className="book-bottom">

                    <span className="rating">
                        ⭐ {book.rating}
                    </span>

                    <span className="price">
                        ₹{book.price}
                    </span>

                </div>

            </div>

        </article>
    );
}

export default BookCard;