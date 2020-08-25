
const nunjucks = require('nunjucks');

const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.render('./views/index.html.njk');
});

const port = 2000;

app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
});

nunjucks.configure({
  autoescape: true,
  express: app
});
