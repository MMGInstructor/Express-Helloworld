var express = require('express');
var saludo = ''
app = express();

app.get('/', function (req, res) {
  saludo = process.env.SALUDO
  if ( saludo ) {
    res.send(`${saludo}\n`);
  }
  else {
    res.send('Hello World!\n');
  }
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

