const path = require('path');
console.log(path.dirname('D:/NodeJS Tutorial/PathModule/path.js'));
console.log(path.extname('D:/NodeJS Tutorial/PathModule/path.js'));
console.log(path.basename('D:/NodeJS Tutorial/PathModule/path.js'));

console.log(path.parse('D:/NodeJS Tutorial/PathModule/path.js'));

const myPath = path.parse('D:/NodeJS Tutorial/PathModule/path.js');

console.log(myPath.name);
