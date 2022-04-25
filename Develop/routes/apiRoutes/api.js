const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

  const newNote = req.body;
  newNote.id = uuidv4();

  notes.push(newNote);

  fs.writeFileSync('../../db/db.json', JSON.stringify(notes));

  res.json(notes);
});

module.exports = router