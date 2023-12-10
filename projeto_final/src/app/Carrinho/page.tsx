import Footer from "../components/Footer";
import NavbarLog from "../components/Navbar_Logged";

function Carrinho(){
    return(
        <main className="bg-green-200">
            <NavbarLog></NavbarLog>
            <div className="bg-green-200 h-full  mt-8  sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto ">
                <div className="flex items-center justify-evenly sm:grid-cols-2 my-6">
                    <div className="bg-green-200 h-1/2 w-3/5   shadow-xl">
                        <h1 className="text-2xl font-bold text-gray-800   ">Itens Selecionados</h1>
                        <h2 className="text-gray-800 font-semibold  text-xl mt-8 ml-6 ">Produto 1</h2>
                        <div className="flex justify-center mb-8 ">
                            <div className="flex bg-green-200 flex-row items-center  w-5/6 mt-10 ">
                                <img className="h=96 w-96" src="/location-map-2956.png" alt="" />
                                <div className="flex flex-col space-y-6">
                                    <h3 className="text-gray-800">Descrição do produto Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto itaque velit magni consequuntur, architecto, libero, quibusdam non qui excepturi quisquam? Architecto aliquid asperiores error ut suscipit a recusandae ipsam?</h3>
                                    <h3 className="text-gray-800 font-semibold text-lg  ">R$ 7,99</h3>
                                </div>

                            </div>
                        </div>
                        <h2 className="text-gray-800 font-semibold  text-xl mt-8 ml-6">Produto 2</h2>
                        <div className="flex justify-center mb-8 ">
                            <div className="flex bg-green-200 flex-row items-center  w-5/6 mt-10 ">
                                <img className="h=96 w-96" src="/map.png" alt="" />
                                <div className="flex flex-col space-y-6">
                                    <h3 className="text-gray-800">Descrição do produto Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto itaque velit magni consequuntur, architecto, libero, quibusdam non qui excepturi quisquam? Architecto aliquid asperiores error ut suscipit a recusandae ipsam?</h3>
                                    <h3 className="text-gray-800 font-semibold text-lg  ">R$ 7,99</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bg-green-200 h-3/5 w-2/5 self-start ml-6 flex flex-row justify-between items-center ">
                        <h1 className="text-2xl font-bold text-gray-800">Pagamento</h1>
                        <h3 className="text-gray-800 font-semibold text-lg  ">R$ 7,99</h3>
                            <button type = "submit" className="bg-green-400 border-2  border-black w-1/2 h-12  ">
                                <p className=" text-2xl text-black ">Compre agora</p>
                        </button>

                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </main>
    )

}

export default Carrinho;