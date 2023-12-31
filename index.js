const express = require('express');
const path = require('path');
const app = express();

// Get the environment from the command line argument or default to 'development'
const environment = process.argv[2] || 'development';

// Set port based on environment
let port;
if (environment === 'prod') {
  port = process.env.PORT || 80; // Set to default port 80 in production
} else {
  port = process.env.PORT || 3000; // Set to default port 3000 in other environments (like 'dev')
}

app.get('/', function (req, res) {
  res.send('Welcome Sumit');
});

// Serve the static website from a specific URL
app.use('/FortnieReq', express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
  console.log(`Example app listening on port ${port} in ${environment} environment!`);
});