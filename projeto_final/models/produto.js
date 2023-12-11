import mongoose from "mongoose";
import { Schema } from "mongoose";
const prodSchema = new Schema(
    {
        name: String,
        descricao: String,
        preco: Int16Array,
        quantidade: Int16Array,
        distanca: Int16Array,
    }
)

const Produto= mongoose.models.Produto ||  mongoose.model("Produto", prodSchema)

export default Produto;