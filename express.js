// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require("./db/db.json");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const sumOfNotes = [];

// Routes
// res.send("Welcome to the Index page!")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// res.send("Welcome to the Notes page!")
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET method for the DB
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

// Create and save notes - takes in JSON input
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    db.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
        if (err) throw err;
    });
    res.json(newNote);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
