// The http.createServer() method includes request and response parameters which is supplied by NodeJs

//The request object can be used to get information about the current HTTP request
//e.g -> url,request,header, and data.

//The response object can be used to send a response for a current HTTP request.

//If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userAPI/userApi.json`,'utf-8')
  const objData = JSON.parse(data)
    
  if (req.url == '/') {
    res.end('Hello world!');
  } else if (req.url == '/contact') {
    res.end('Contact us Page');
  } else if (req.url == '/about') {
    res.end('About us Page');
  }else if(req.url == '/userapi'){
    res.writeHead(200, {'content-type': 'application/json'});  
    res.end(objData[2].name)    
  }
   else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('404 Page Not Found');
  }
});
// server.listen(8000, '127.0.0.1', () => {
//   console.log('Port running successfully.');
// });
