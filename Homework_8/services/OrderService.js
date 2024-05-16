
const db = require('../db/db');
const Order = require('../models/Order');

class OrderService {
  static getAllOrders(callback) {
    db.all("SELECT * FROM orders", [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        const orders = rows.map(row => new Order(row.id, row.userId, row.totalPrice));
        callback(null, orders);
      }
    });
  }

  static getOrderById(id, callback) {
    db.get("SELECT * FROM orders WHERE id = ?", [id], (err, row) => {
      if (err) {
        callback(err);
      } else {
        const order = new Order(row.id, row.userId, row.totalPrice);
        callback(null, order);
      }
    });
  }

  static addOrder(order, books, callback) {
    const { userId, totalPrice } = order;
    db.run("INSERT INTO orders (userId, totalPrice) VALUES (?, ?)", [userId, totalPrice], function (err) {
      if (err) {
        callback(err);
      } else {
        const orderId = this.lastID;
        const placeholders = books.map(() => '(?, ?)').join(',');
        const values = books.flatMap(book => [orderId, book.id]);
        db.run(`INSERT INTO order_books (orderId, bookId) VALUES ${placeholders}`, values, (err) => {
          callback(err, orderId);
        });
      }
    });
  }

  static deleteOrder(id, callback) {
    db.run("DELETE FROM orders WHERE id = ?", [id], function (err) {
      callback(err);
    });
  }
}

module.exports = OrderService;

  
  


  
  
