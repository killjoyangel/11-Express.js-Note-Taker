
const database = require('../db/db.json')
const { v4: uuidv4 } = require("uuid");


module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(database));
    app.post("/api/notes", (req, res) => {
        const newNote = req.body; 
        newNote.id = uuidv4(); 
        database.push(newNote); 
        res.json(true); 
    })};
