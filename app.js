var express = require('express');
var saludo = ''
app = express();

app.get('/', function (req, res) {
  saludo = process.env.SALUDO
  nombre = process.env.NOMBRE
  if ( saludo ) {
    res.send(`${saludo} ${nombre}\n`);
  }
  else {
    res.send('Hello World!\n');
  }
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

