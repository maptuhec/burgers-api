const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./../db/db-params');
var {Burger} = require('./../db/db-model');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Create new burger
app.post('/burger', async (req, res) => {
  const burger = new Burger({
    name: req.body.name,
    burgerNum: req.body.burgerNum
  });
  try {
    await burger.save();
    res.send(burger);
  } catch (e) {
    res.status(404).send();
  }
});

//Get all burgers
app.get('/burgers', async (req, res) => {
  try {
      const burgers = await Burger.find();
      res.send({burgers});
  } catch (e) {
      res.status(400).send(e)
  }
});

//Get random burgers
app.get('/burger/random', (req, res) => {
    Burger.findOneRandom(function(err, result) {
    if (!err) {
      res.send(result);
    } else {
      res.status(400).send(err);
    }
  });
});

//Get burger by burger number
app.get('/burger/:number', async (req, res) => {
  var burgerNum = req.params.number;

  try {
    const burger = await Burger.findOne({burgerNum:burgerNum});
    res.send({burger});
  } catch (e) {
    res.status(400).send();
  }
});

//Get burger by Id
app.get('/burger/id/:id', async (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

  try {
    const burger = await Burger.findOne({_id:id});
    res.send({burger});
  } catch (e) {
    res.status(400).send();
  }
});



app.listen(port, () => {
  console.log(`Started at ${port}`);
});

module.exports = {app};
