import Header from "../components/Header";
import Footer from "../components/Footer";
import NavbarLog from "../components/Navbar_Logged";
function Cadastro_Prod(){
    return(
        <main>
            <NavbarLog></NavbarLog>
                <div className="bg-green-500 min-w-screen h-screen flex justify-center items-center">
                <div className=" w-1/2 h-fit bg-white rounded-2xl  justify-center mt-20 mb-20   border-0.1 border-black shadow-xl">
                    <div>
                        <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Cadastre seu produto</p>
                    </div>


                    <form className="justify-center mx-16 mb-10">

                        <div className="flex justify-start mt-10 space-x-10 items-center">
                            <img src= "/profile_pic.jpg" alt="" className=" w-52 h-44 border-0.1 border-black rounded-3xl" />
                            <div className="w-full justify-center ">
                                <p className="text-black">Adicione uma foto para seu produto</p>
                                <input type="file" accept="image/*"  className=" w-1/3 h-fit borde-2 border-black"/>
                                </div>
                        </div>

                        <div className="mt-10 space-x-5 w-full h-fit flex items-center">
                            <input type="name" placeholder = 'NOME DO PRODUTO' className=" border-0.1 bg-green-200 border-black rounded-3xl h-10 w-full text-center"/>
                            <input type="name" placeholder = 'NOME DA LOJA' className=" border-0.1 bg-green-200 border-black rounded-3xl h-10 w-full text-center"/>
                        </div>

                        <div className="my-10 space-y-10 flex flex-col h-fit max-w-full">
                            <input type="text" placeholder = 'DESCRIÇÃO' className='border-0.1 bg-green-200 border-black rounded-3xl h-10 text-center'/>
                            <input type="password" placeholder = 'PREÇO DO PRODUTO' className='border-0.1 bg-green-200 border-black rounded-3xl h-10 text-center'/>
                        </div>

                        <div className="flex w-full h-fit justify-center items-center">
                        <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10">
                            <p className="text-white text-2xl">Cadastrar Produto</p>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
            </main>
    )

}

export default Cadastro_Prod;