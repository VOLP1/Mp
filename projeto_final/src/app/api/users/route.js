import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/user";
import NextResponse from "next/server"

export async function POST(request) {
    const {name, email, senha} = await request.json();
    await connectMongoDB();
    await User.create({name,senha,email});
    return NextResponse.json({massage: "Usuario criado"},{status:201})
}

