const express = require('express');
const bodyParser = require('body-parser');
const {router} = require('./endpoints.js')

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Started at ${port}`);
});

module.exports = {app};
