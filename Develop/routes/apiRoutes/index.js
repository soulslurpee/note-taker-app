const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post(function (req, res) {
  let jsonFilePath = path.join(__dirname, "../../db/db.json");
  let newNote = req.body;

  newNote.id = uuidv4();

  database.push(newNote)

  fs.writeFile(jsonFilePath, JSON.stringify(database), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Note Saved");
  }); 
  res.json(newNote);
});

module.exports = router