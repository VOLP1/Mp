const mongoose = require('mongoose');

async function connectToDatabase() {
    mongoose.connect("mongodb+srv://eduvolpi5:Evendisc88398@cluster0.cs0ohn2.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
}
