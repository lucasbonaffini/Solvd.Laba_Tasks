const db = require('../db/db');
const Book = require('../models/Book');

class BookService {
  static getAllBooks(callback) {
    db.all("SELECT * FROM books", [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        const books = rows.map(row => new Book(row.id, row.title, row.author, row.isbn, row.price, row.availability));
        callback(null, books);
      }
    });
  }

  static getBookById(id, callback) {
    db.get("SELECT * FROM books WHERE id = ?", [id], (err, row) => {
      if (err) {
        callback(err);
      } else {
        const book = new Book(row.id, row.title, row.author, row.isbn, row.price, row.availability);
        callback(null, book);
      }
    });
  }

  static addBook(book, callback) {
    const { title, author, isbn, price, availability } = book;
    db.run("INSERT INTO books (title, author, isbn, price, availability) VALUES (?, ?, ?, ?, ?)",
      [title, author, isbn, price, availability], function (err) {
        callback(err, this.lastID);
      });
  }

  static updateBook(id, book, callback) {
    const { title, author, isbn, price, availability } = book;
    db.run("UPDATE books SET title = ?, author = ?, isbn = ?, price = ?, availability = ? WHERE id = ?",
      [title, author, isbn, price, availability, id], function (err) {
        callback(err);
      });
  }

  static deleteBook(id, callback) {
    db.run("DELETE FROM books WHERE id = ?", [id], function (err) {
      callback(err);
    });
  }
}

module.exports = BookService;
