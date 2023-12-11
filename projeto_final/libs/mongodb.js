import mongoose from "mongoose"

const connectMongoDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado ao MongoBD.");
    } catch(error) {
        console.log(error);
    }
};

export default connectMongoDB;