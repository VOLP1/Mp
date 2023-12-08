const mongoose = require('mongoose');
const User = require('./User'); 

async function main() {
    await mongoose.connect("mongodb://localhost:27017");
    const user = await User.create({ 
        title: 'Maçã Gala',
        description: 'Maçãs frescas e doces, perfeitas para lanches e sobremesas.',
        image: 'url_da_imagem_da_maca.jpg',
        price: 3.50, // Supondo que o preço seja por quilo
        previousPrice: 4.00,
        isNew: false,
        brand: 'Fazenda do Vale',
        category: 'Frutas',
        quantity: 200, // 200 kg disponíveis
        carrinho: {
            latidute: 1010.1,
            Longetude: 21000,
        },
     })
    user.name = "Saally"
    console.log(user)
}

main().catch(console.error);
