import "../styles/BookModal.css";

function BookModal({ book, closeModal }) {

  if (!book) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={closeModal}
    >

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-button"
          onClick={closeModal}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-body">

          <div className="modal-image-section">

            <img
              src={book.coverImage}
              alt={book.title}
              className="modal-book-image"
            />

          </div>

          <div className="modal-details">

            <span className="modal-category">
              {book.category}
            </span>

            <h2>{book.title}</h2>

            <p className="modal-author">
              by <strong>{book.author}</strong>
            </p>

            <div className="modal-rating">
              ⭐ {book.rating} / 5
            </div>

            <p className="modal-description">
              {book.description}
            </p>

            <div className="book-details-grid">

              <div>
                <span>Published</span>
                <strong>{book.publishedYear}</strong>
              </div>

              <div>
                <span>Language</span>
                <strong>{book.language}</strong>
              </div>

              <div>
                <span>Pages</span>
                <strong>{book.pages}</strong>
              </div>

              <div>
                <span>Publisher</span>
                <strong>{book.publisher}</strong>
              </div>

            </div>

            <div className="modal-footer">

              <div className="modal-price">
                ₹{book.price}
              </div>

              <button className="buy-button">
                Add to Library
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookModal;