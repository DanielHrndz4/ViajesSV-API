const express = require('express');
const router = express.Router();
const User = require('../model/user.model');

// Create a user
router.post("/users", (req, res) => {
    const { firstName, lastName, phoneNumber, email, password } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password
    });
  
    newUser.save()
      .then((data) => res.status(201).json(data)) // 201 Created
      .catch((error) => res.status(400).json({ message: error.message })); // 400 Bad Request
  });

// Get all users
router.get("/users", (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a user by ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted successfully" }))
    .catch((error) => res.json({ message: error }));
});

// Update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  User.findByIdAndUpdate(id, {
    firstName,
    lastName,
    phoneNumber,
    email,
    password
  }, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
