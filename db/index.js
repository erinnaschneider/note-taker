const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');

// read asychronously

const readAsync = util.promisify(fs.readFile);

// write async

const writeAsync = util.promisify(fs.writeFile);

class Synchronisity {
    read() {
        return readAsync('db/db.json', 'utf-8');
    } 

    readNotes() {
        return this.read().then((data)=>{
                let notes;
                try{
                    notes = [].concat(JSON.parse(data))
                } catch(err) {
                    notes = []
                } 
                return notes;
            })
    }

    write(data) {
        return writeAsync('db/db.json', JSON.stringify(data));
    }
//1. grab the text and the title out of the data that is being passed in. create a new note object with the title and tesxt and add a new key for id and pass the uuid() then proceed to 2
// 2. you should read the nots in the database. then pass the notes down and return a new array with the spread of the initial notes.

writeNotes(note) {
    const {title, text} = note;

    const newNote ={
        title, 
        text, 
        id: uuid()
    }

    return this.readNotes().then((existingNotes)=>[...existingNotes, newNote]).then((newNoteArr)=> this.write(newNoteArr))

      }

    deleteNotes(id) {
        return this.readNotes().then((existingNotes) => existingNotes.filter((note)=>note.id !== id)).then((newNoteArr)=> this.write(newNoteArr))
    }

    
}


module.exports = new Synchronisity();