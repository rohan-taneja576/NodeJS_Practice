const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'utf-8');

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace('{%tempval%}', orgVal.main.temp);
  temperature = temperature.replace('{%tempmin%}', orgVal.main.temp_min);
  temperature = temperature.replace('{%tempmax%}', orgVal.main.temp_max);
  temperature = temperature.replace('{%location%}', orgVal.name);
  temperature = temperature.replace('{%country%}', orgVal.sys.country);
  temperature = temperature.replace('{%tempStatus%}', orgVal.weather[0].main);
  return temperature;
};

const server = http.createServer((req, res) => {
  //console.log(res);
  if (req.url == '/') {
    requests(
      'http://api.openweathermap.org/data/2.5/weather?q=Fatehabad&units=metric&appid=17283a6720ca3e291fc7bea30a5db02b'
    )
      .on('data', chunk => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realTimeData = arrData
          .map(val => replaceVal(homeFile, val))
          .join('');
        res.write(realTimeData);
      })
      .on('end', err => {
        if (err) return console.log('Connection lost due to some errors', err);
        console.log('end');
      });
  }
});

server.listen(8000, '127.0.0.1');
