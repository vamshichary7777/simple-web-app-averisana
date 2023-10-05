const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT || 3000; // Default port is 3000 if SERVER_PORT is not set

app.get('/', function (req, res) {
  res.send('Simple Web Application is UP');
});

app.listen(PORT, function () {
    console.log('Simple Web Application running on port ' + PORT);
});
