// database/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('book_store.db');

db.serialize(() => {
  db.run("CREATE TABLE books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, isbn TEXT, price REAL, availability INTEGER)");
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
  db.run("CREATE TABLE orders (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, totalPrice REAL)");
  db.run("CREATE TABLE order_books (orderId INTEGER, bookId INTEGER)");
  db.run("CREATE TABLE cart (userId INTEGER, bookId INTEGER)");
});

module.exports = db;










