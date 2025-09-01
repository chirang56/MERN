import express from 'express';

const app = express();
app.get('/api/notes', (req, res) => {
    // send all notes
    res.send("you have your notes here");
});

app.post("/api/notes", (req, res) => {
    // add or create a new note
    res.send("note added");
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});  