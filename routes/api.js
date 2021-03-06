const router = require('express').Router();
const synchronisity = require('../db');
// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    synchronisity.readNotes().then((notes) => {
        return res.json(notes)
    }).catch((err) => res.json(err))
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
    synchronisity.writeNotes(req.body).then((notes) => {
        return res.json(notes)
    }).catch((err) => res.json(err))
});

router.delete('/notes/:id', (req, res) => {
    synchronisity.deleteNotes(req.params.id).then((notes) => {
        return res.json(notes)
    }).catch((err) => res.json(err))
});

module.exports = router;