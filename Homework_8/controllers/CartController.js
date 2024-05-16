// controllers/cartController.js
const express = require('express');
const router = express.Router();
const CartService = require('../services/CartService');

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  CartService.getCartByUserId(userId, (err, cart) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(cart);
    }
  });
});

router.post('/:userId/add/:bookId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const bookId = parseInt(req.params.bookId, 10);

  CartService.addBookToCart(userId, bookId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      CartService.getCartByUserId(userId, (err, cart) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(cart);
        }
      });
    }
  });
});

router.post('/:userId/remove/:bookId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const bookId = parseInt(req.params.bookId, 10);

  CartService.removeBookFromCart(userId, bookId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      CartService.getCartByUserId(userId, (err, cart) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(cart);
        }
      });
    }
  });
});

router.get('/:userId/total', (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  CartService.getCartByUserId(userId, (err, cart) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const total = cart.calculateTotal();
      res.json({ total });
    }
  });
});

module.exports = router;




