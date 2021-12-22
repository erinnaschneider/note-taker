const express = require('express');
const html = require('./routes/html.js');
const api = require('./routes/api.js');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', html);
app.use('/api', api);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
// The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

// The following HTML routes should be created:



// The following API routes should be created:



// You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.