import Footer from "../components/Footer";
import Header from "../components/Header";

function Produto(){
    return(
        <main>
            <Header></Header>
            <div className="bg-green-200 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src="/map.png" alt="Product Image"/>
                            </div>
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700">Adicionar ao carrinho</button>
                        </div>     
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Nome do produto</h2>
                            <h3 className="text-gray-600 font-semibold  text-base mb-4">Nome da loja</h3>
                           
                            <div className="mr-4 mb-4">
                                    <p className="font-bold text-gray-700">Preço:</p>
                                    <p className="text-gray-600 ">$29.99</p>
                            </div>
                            
                            
                            <div>
                                <p className="font-bold text-gray-700 ">Descrição do produto:</p>
                                <p className="text-gray-600  text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )

}

export default Produto;