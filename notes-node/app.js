
// Require modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];
console.log('Yargs:', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log('Error: Note already exist');
  } else {
    console.log('Note created successfully');
    notes.logNote(note);
  }
} else if (command === 'list') {
  var listNotes = notes.getAll();
  console.log(`Printing ${listNotes.length} note(s).`);
  listNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (_.isUndefined(note)) {
    console.log('Note not found');
  } else {
    notes.logNote(note);
  }
} else if (command === 'remove') {
  var wasRemoved = notes.removeNote(argv.title);
  console.log(wasRemoved ? 'Note was removed' : 'Not not found');
} else {
  console.log("Unrecognized command");
}
