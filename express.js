// Dependencies
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// res.send("Welcome to the Index page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// res.send("Welcome to the Notes page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
