import { userAgent } from "next/server";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LogIn () {


     return( 
        <main className="bg-green-500">
            <Header></Header>
            <div className="flex justify-center items-center min-w-screen h-screen">
                <div className=" bg-green-200    shadow-xl w-1/3 h-2/3 mb-16 mt-20 flex flex-col rounded-2xl border-0.1 border-black ">
                    <div className="mb-16">
                        <p className="text-black text-center text-2xl font-inter font-semibold mt-8"> Login </p>
                    </div>

                    <form className="justify-center mx-16" >
                        <div className=" flex flex-col h-fit w-full  space-y-10 justify-center ">
                            <input type="email" placeholder = 'EMAIL' className = 'border-0.1 text-black border-black rounded-3xl h-10 text-center' />
                            <input type="password" placeholder = 'SENHA' className='border-0.1 text-black border-black rounded-3xl h-10 text-center' />
                        </div>
                        <div className="flex w-full h-fit justify-center items-center mt-10">
                        <button type = "submit" className="bg-blue-900 w-1/2 h-12 rounded-3xl mt-10 ">
                            <p className="text-white text-2xl">Entrar</p>
                        </button>
                        </div>
                        <div className="flex w-full h-fit justify-center items-center mt-8"> 
                            <a className="text-slate-500 hover:underline" href="./Cadastro">Crie sua conta</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
            
            
        </main>
    )
}