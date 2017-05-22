// var obj = {
//   name: 'Kasim'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Kasim", "age": 27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Learn Node',
  body: 'Let us learn Node!'
};
console.log(originalNote);
// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
console.log(noteString);
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
