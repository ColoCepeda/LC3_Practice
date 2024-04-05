import "./App.css";
import BookItem from "./components/bookItem/BookItem";
import books from "./components/bookArray/BookArray";

const App = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {books.map((book, index) => (
        <BookItem
          key={index}
          title={book.bookTitle}
          author={book.bookAuthor}
          pageCount={book.pageCount}
          rating={book.bookRating}
          imageUrl={book.imageUrl}
        />
      ))}
    </div>
  );
};

export default App;
