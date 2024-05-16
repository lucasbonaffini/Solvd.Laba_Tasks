
const db = require('../db/db');
const User = require('../models/User');

class UserService {
  static getAllUsers(callback) {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        const users = rows.map(row => new User(row.id, row.name, row.email));
        callback(null, users);
      }
    });
  }

  static getUserById(id, callback) {
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
      if (err) {
        callback(err);
      } else {
        const user = new User(row.id, row.name, row.email);
        callback(null, user);
      }
    });
  }

  static addUser(user, callback) {
    const { name, email } = user;
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function (err) {
      callback(err, this.lastID);
    });
  }

  static updateUser(id, user, callback) {
    const { name, email } = user;
    db.run("UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id], function (err) {
        callback(err);
      });
  }

  static deleteUser(id, callback) {
    db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
      callback(err);
    });
  }
}

module.exports = UserService;

  
