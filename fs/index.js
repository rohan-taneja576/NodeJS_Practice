//REPL
// 1.)JS Expression
// 2.)use variables
// 3.)Multiline Code/loops
// 4.)use (_) to get the last result
// 5.) we can use editor mode

const fs = require('fs');

//Creating a new file
// fs.writeFileSync('read.txt', 'Hello World !');

// fs.writeFileSync('read.txt', 'Hello World ! Rohan this side');

fs.appendFileSync('read.txt', ' I have keen interest in Cricket.');
const buf_data = fs.readFileSync('read.txt');
const org_data = buf_data.toString();
console.log(org_data);

// to rename the file
fs.renameSync('read.txt', 'readWrite.txt');
