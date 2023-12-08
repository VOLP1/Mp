const mongoose = require('mongoose');
const User = require('./User'); 

async function main() {
    await mongoose.connect("mongodb://localhost:27017");
    const user = await User.create({ name: "Kyle", age: 26 })
    user.name = "Saally"
    console.log(user)
}

main().catch(console.error);
