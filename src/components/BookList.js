import BookItem from "./BookItem";

function BookList({ books, onDelete }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default BookList;