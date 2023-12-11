import Footer from "../components/Footer";
import NavbarLog from "../components/Navbar_Logged";

function Pagamento(){
    return(
        <main className="bg-green-200">
            <NavbarLog></NavbarLog>
            <div className="bg-green-200 h-full  mt-8  sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto ">
                <div className="flex items-center justify-evenly sm:grid-cols-2 my-6">
                    <div className="bg-green-200 h-1/2 w-3/5   shadow-xl">
                        <h1 className="text-2xl font-bold text-gray-800   ">Localização dos itens</h1>
                        <h2 className="text-gray-800 font-semibold  text-xl mt-8 ml-6 ">Produto 1</h2>
                        <div className="flex justify-center mb-8 ">
                            <div className="flex bg-green-200 flex-row items-center  w-5/6 mt-10 ">
                                <img className="h=96 w-96" src="/loc_ex.jpg" alt="" />
                            </div>
                        </div>
                        <h2 className="text-gray-800 font-semibold  text-xl mt-8 ml-6">Produto 2</h2>
                        <div className="flex justify-center mb-8 ">
                            <div className="flex bg-green-200 flex-row items-center  w-5/6 mt-10 ">
                                <img className="h=96 w-96" src="/loc_ex.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-200 h-3/5 w-2/5 self-start ml-6 flex flex-col my-6 justify-between items-center shadow-xl ">
                        <form className="justify-center mx-16">
                            <div className="mt-10 space-x-5 w-full h-fit flex items-center">
                                <input type="name" placeholder = 'NOME' className=" border-0.1 text-black border-black rounded-3xl h-10 w-full text-center"/>
                                <input type="lastname" placeholder= 'SOBRENOME' className="border-0.1 text-black border-black rounded-3xl h-10 w-full text-center"/>
                            </div>

                            <div className="my-10 space-y-10 flex flex-col h-fit max-w-full">
                                <input type="email" placeholder = 'NÙMERO DO CARTÃO' className = 'border-0.1 text-black border-black rounded-3xl h-10 text-center' />
                                <input type="password" placeholder = 'CVV' className='border-0.1 text-black border-black rounded-3xl h-10 text-center'/>
                            </div>
                        </form>
                        <h1 className="text-2xl font-bold text-gray-800">Pagamento</h1>
                        <h3 className="text-gray-800 font-semibold text-lg  ">R$ 7,99</h3>
                        <button type = "submit" className="bg-green-400 border-2  border-black w-1/2 h-12 mt-6 mb-6 ">
                            <a href="/Pagamento" className="text-2xl text-black">Comprar</a>
                        </button>

                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </main>
    )

}

export default Pagamento;