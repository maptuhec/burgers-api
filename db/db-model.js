var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var BurgerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  burgerNum: {
    type: Number,
    required: true,
    minlength: 1
  }
});

BurgerSchema.plugin(random);
var Burger = mongoose.model('Burger', BurgerSchema);

module.exports = {Burger};
