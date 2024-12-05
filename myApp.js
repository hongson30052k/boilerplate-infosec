const express = require('express');
const helmet = require('helmet');  // Correct import
const app = express();

// Use helmet to secure your app, including the frameguard middleware
app.use(helmet());  // This enables all default helmet protections, including frameguard

// Optionally, you can configure frameguard explicitly
app.use(helmet.frameguard({ action: 'DENY' }));















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
