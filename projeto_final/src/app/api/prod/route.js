import Produto from "../../../../models/produto.js";
import connectMongoDB from "../../../../libs/mongodb";
import NextResponse from "next/server"

export async function POST(request) {
    const {name, descricao, preco,quantidade,distancia} = await request.json();
    await connectMongoDB();
    await Produto.create({name, descricao, preco,quantidade,distancia});
    return NextResponse.json({massage: "Produto criado"},{status:201})
}