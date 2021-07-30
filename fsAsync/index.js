const fs = require('fs');

// fs.writeFile('read.txt', 'Today is great day', err => {
//   console.log('File is created');
//   console.log(err);
// });
// fs.appendFile('read.txt', ' for me.', err => {
//   console.log('data added successfully.');
// });
fs.readFile('read.txt', 'utf-8', (err, data) => {
  console.log(data);
});
