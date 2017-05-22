const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    // return empty array if notes not exist
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// Arrow functions in ES6
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // filter takes in a callback function
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  // could have used 'filter' method as well here
  return notes.find(note => note.title === title);
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter(note => note.title !== title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length;
};

var logNote = (note) => {
  console.log('-----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  // when key and vaue are same, ES6 allows
  // you to specify just one
  // e.g. addNote: addNote is same as below:
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
