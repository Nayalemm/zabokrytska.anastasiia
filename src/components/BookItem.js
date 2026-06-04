function BookItem({ book, onDelete }) {
  return (
    <li>
      {book.title} - {book.author} ({book.year})

      <button onClick={() => onDelete(book.id)}>
        Видалити
      </button>
    </li>
  );
}

export default BookItem;