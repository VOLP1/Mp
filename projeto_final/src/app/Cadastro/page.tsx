import Footer from "../components/Footer";
import Header from "../components/Header";

function Cadastro(){
    return(
        <main>
            <Header></Header>
            <div className="bg-green-500 min-w-screen h-screen flex justify-center items-center">
            
                <div className=" w-1/2 h-2/3 bg-green-200  rounded-2xl  justify-center  border-0.1 border-black shadow-xl">
                    <div>
                        <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Faça sua conta</p>
                    </div>

                    <form className="justify-center mx-16">

                        <div className="mt-10 space-x-5 w-full h-fit flex items-center">
                            <input type="name" placeholder = 'NOME' className=" border-0.1 text-black border-black rounded-3xl h-10 w-full text-center"/>
                            <input type="lastname" placeholder= 'SOBRENOME' className="border-0.1 text-black border-black rounded-3xl h-10 w-full text-center"/>
                        </div>

                        <div className="my-10 space-y-10 flex flex-col h-fit max-w-full">
                            <input type="email" placeholder = 'EMAIL' className = 'border-0.1 text-black border-black rounded-3xl h-10 text-center' />
                            <input type="password" placeholder = 'SENHA' className='border-0.1 text-black border-black rounded-3xl h-10 text-center'/>
                        </div>

                        <div className="flex w-full h-fit justify-center items-center">
                        <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10">
                            <p className="text-white text-2xl">Cadastrar</p>
                        </button>
                        </div>
                    </form>
                </div>            
            </div>
            <Footer></Footer>
            </main>
    )

}

export default Cadastro;