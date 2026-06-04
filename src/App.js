import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3001/books"
      );

      const data = await response.json();

      setBooks(data);
    } catch (err) {
      setError("Помилка завантаження");
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await fetch(
        "http://localhost:3001/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );

      const newBook = await response.json();

      setBooks([...books, newBook]);
    } catch (err) {
      setError("Помилка додавання");
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(
        `http://localhost:3001/books/${id}`,
        {
          method: "DELETE",
        }
      );

      setBooks(
        books.filter((book) => book.id !== id)
      );
    } catch (err) {
      setError("Помилка видалення");
    }
  };

  return (
    <div>
      <Header />

      <BookForm onAdd={addBook} />

      {loading && <p>Завантаження...</p>}

      {error && <p>{error}</p>}

      <BookList
        books={books}
        onDelete={deleteBook}
      />

      <Footer />
    </div>
  );
}

export default App;