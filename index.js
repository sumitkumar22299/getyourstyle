const express = require('express');
const app = express();
const PORT = process.env.PORT || 80; // Set the default port to 80

app.get('/', function (req, res) {
  res.send('Welcome Sumit');
});

app.get('/FortnieReq', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});