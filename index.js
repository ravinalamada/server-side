
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  console.log('Request: /');
  response.sendFile(__dirname + '/index.html');
});
const port = 2000;
app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
});
