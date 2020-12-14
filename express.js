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
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// res.send("Welcome to the Notes page!")
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Create New notes - takes in JSON input
// app.post('/api/note', (req, res) => {
    
//     const newNote = req.body;
//     newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newNote);

//     notes.push(newNote);
//     res.json(newNote);
// });


// Setup the /api/notes post route
app.post("/api/notes", (req, res) => {
    // Receives a new note, adds it to db.json, then returns the new note
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added new note: "+newNote.title);
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
