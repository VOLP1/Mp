"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import NavbarLog from "../components/Navbar_Logged";

function Feed() {
  const { data: session } = useSession();
  return (
    <main>
      {session? <NavbarLog/>: <Navbar/>}
      <section className="bg-green-200 py-8 h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">Produtos à Venda</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Produto 1 */}
            <div className="bg-white ml-6 rounded-lg shadow-md  p-4">
              <img src="caminho/para/imagem-produto-1.jpg" alt="Nome do Produto 1" className="w-full rounded mb-4" />
              <h2 className="text-xl font-bold mb-2">Nome do Produto 1</h2>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet...</p>
              <p className="text-green-700 font-bold mb-4">Preço: R$ 99,99</p>
              <a href="/Carrinho" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Adicionar ao Carrinho</a>
              
            </div>
            {/* Produto 2 - Copie a estrutura do Produto 1 e adicione informações para o segundo produto */}
            {/* Produto 3 */}
            {/* Produto 4 */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Feed;
