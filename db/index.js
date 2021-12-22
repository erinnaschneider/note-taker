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
}


module.exports = new Synchronisity();