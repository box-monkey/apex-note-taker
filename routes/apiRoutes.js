const router = require("express").Router();
const { createNewNote } = require("../lib/notes");

// requests and gets data from our notes file.
router.get("/notes", (req, res) => {
  console.log("route hit");
  const incomingGetNotes = getNotes();
  res.json(incomingGetNotes);
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
