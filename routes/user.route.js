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

// Get a user by email and password
router.post("/users/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
        .then((data) => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ message: "Invalid email or password" });
            }
        })
        .catch((error) => res.status(500).json({ message: error.message })); // 500 Internal Server Error
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
