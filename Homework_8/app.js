// app.js
const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/BookController');
const userController = require('./controllers/UserController');
const orderController = require('./controllers/OrderController');
const cartController = require('./controllers/CartController');
const db = require('./db/db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/books', bookController);
app.use('/users', userController);
app.use('/orders', orderController);
app.use('/cart', cartController);

app.listen(port, () => {
  console.log(`Online bookstore app listening at http://localhost:${port}`);
});



