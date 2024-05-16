// services/cartService.js
const db = require('../db/db');
const Cart = require('../models/Cart');
const BookService = require('./BookService');

class CartService {
  static getCartByUserId(userId, callback) {
    db.all("SELECT b.* FROM cart c JOIN books b ON c.bookId = b.id WHERE c.userId = ?", [userId], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        const cart = new Cart(userId);
        cart.books = rows.map(row => ({
          id: row.id,
          title: row.title,
          author: row.author,
          isbn: row.isbn,
          price: row.price,
          availability: row.availability
        }));
        callback(null, cart);
      }
    });
  }

  static addBookToCart(userId, bookId, callback) {
    BookService.getBookById(bookId, (err, book) => {
      if (err) {
        callback(err);
      } else {
        db.run("INSERT INTO cart (userId, bookId) VALUES (?, ?)", [userId, bookId], function (err) {
          callback(err);
        });
      }
    });
  }

  static removeBookFromCart(userId, bookId, callback) {
    db.run("DELETE FROM cart WHERE userId = ? AND bookId = ?", [userId, bookId], function (err) {
      callback(err);
    });
  }

  static calculateTotal(cart, callback) {
    const total = cart.calculateTotal();
    callback(null, total);
  }
}

module.exports = CartService;

  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

