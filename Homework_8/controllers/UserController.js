// controllers/userController.js
const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');
const User = require('../models/User');

router.get('/', (req, res) => {
  UserService.getAllUsers((err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  UserService.getUserById(id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
});

router.post('/', (req, res) => {
  const user = new User(null, req.body.name, req.body.email);
  UserService.addUser(user, (err, userId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: userId });
    }
  });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = new User(id, req.body.name, req.body.email);
  UserService.updateUser(id, user, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  UserService.deleteUser(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;


