const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post( (req, res) => {
  let dbPath = path.join(__dirname, "../../db/db.json");
  let newNote = req.body;

  newNote.id = uuidv4();

  notes.push(newNote)

  fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Note Saved");
  }); 
  res.json(newNote);
});

module.exports = router