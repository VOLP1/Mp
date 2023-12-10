const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    senha: String,
  }); 
  
  module.exports = mongoose.model('Usuario', userSchema);