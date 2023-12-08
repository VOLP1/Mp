const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    Longetude: Number,
    Latitude: Number,
});

const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  previousPrice: Number,
  isNew: Boolean,
  brand: String,
  category: String,
  quantity: Number,
  carrinho: addressSchema,
}); 

module.exports = mongoose.model('User', userSchema);
