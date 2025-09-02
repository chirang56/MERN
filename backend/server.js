import express from 'express';

const app = express();
app.get('/api/notes', (req, res) => {
    // send all notes
    res.status(200).send("You have got your notes here!");
});

app.post("/api/notes", (req, res) => {
    // add or create a new note
    res.status(201).json({ message: "Note added successfully!"});
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({ messge: "Note updated successfully!"});
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "Note deleted successfully!"});
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});  