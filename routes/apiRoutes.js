const router = require("express").Router();
const { 
    createNewNote, 
    getNotes,
    deleteSelectedNote   
} = require('../lib/notes');

// requests and gets data from our notes file.
router.get("/notes", (req, res) => {
  console.log("route hit");
  const incomingGetNotes = getNotes();
  res.json(incomingGetNotes);
});

// written and stored to database functionality 
router.post("/notes", (req, res) => {
  const incomingNote = createNewNote(req.body);
  res.json(incomingNote);
});

// delete button functionality
router.delete("/notes/:noteId", (req, res) => {
    const deletedNote = deleteSelectedNote(req.params.noteId);
    res.json(deletedNote);
  });


module.exports = router;


