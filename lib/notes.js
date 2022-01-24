const path = require("path");
const fs = require("fs");
let { notesDataBase } = require("../db/db.json");
const { v4: uuidv4 } = require("uuid"); //  equiv to import { v4 as uuidv4 } from 'uuid';

// gets the notes
function getNotes() {
  database = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
  return database.notesDataBase;
}

// create new note function
function createNewNote(newNote) {
  let id = uuidv4();
  newNote.id = id;
  notesDataBase.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notesDataBase }, null, 2)
  );
  return notesDataBase[notesDataBase.length - 1];
}

module.exports = {
  createNewNote,
  getNotes,
};
