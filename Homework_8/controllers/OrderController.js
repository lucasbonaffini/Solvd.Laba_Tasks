
const express = require('express');
const router = express.Router();
const OrderService = require('../services/OrderService');
const Order = require('../models/Order');

router.get('/', (req, res) => {
  OrderService.getAllOrders((err, orders) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(orders);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  OrderService.getOrderById(id, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(order);
    }
  });
});

router.post('/', (req, res) => {
  const order = new Order(null, req.body.userId, req.body.totalPrice);
  const books = req.body.books;
  OrderService.addOrder(order, books, (err, orderId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: orderId });
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  OrderService.deleteOrder(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200).send(`Order with ID ${id} has been deleted.`);
    }
  });
});

module.exports = router;




