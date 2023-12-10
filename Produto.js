const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    Longetude: Number,
    Latitude: Number,
});
//MODEL DE PRODUTO

const userSchema = new mongoose.Schema({
  name: String,
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

module.exports = mongoose.model('Produto', userSchema);
