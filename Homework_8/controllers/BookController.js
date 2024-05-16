// controllers/bookController.js
const express = require('express');
const router = express.Router();
const BookService = require('../services/BookService');
const Book = require('../models/Book');

router.get('/', (req, res) => {
  BookService.getAllBooks((err, books) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(books);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  BookService.getBookById(id, (err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(book);
    }
  });
});

router.post('/', (req, res) => {
  const book = new Book(null, req.body.title, req.body.author, req.body.isbn, req.body.price, req.body.availability);
  BookService.addBook(book, (err, bookId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: bookId });
    }
  });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = new Book(id, req.body.title, req.body.author, req.body.isbn, req.body.price, req.body.availability);
  BookService.updateBook(id, book, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  BookService.deleteBook(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;

