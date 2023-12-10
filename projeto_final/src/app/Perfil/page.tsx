import NavbarLog from "../components/Navbar_Logged";
import Footer from "../components/Footer";

function Perfil(){
    return(
        <body>
            <NavbarLog></NavbarLog>
            <div className = "bg-green-200 flex  justify-around">
                <div className="bg-green-300 w-4/5 min-h-screen border-r-2 border-l-2 border-black">
                    {/* Foto e capa */}
                    <div className="bg-green-700 w-full h-40 flex  justify-between items-center ">
                        <img src = "/profile_pic.jpg" alt="Foto de Perfil" className=" ml-10 mb-2 border-2  bg-white w-48 h-36 rounded-3xl"/>
                        <p className="mr-40 text-4xl text-black">NOME</p>
                    </div>

                    {/* Botão Editar Dados */}
                    <div className="mt-10 w-full flex justify-center space-x-10">
                        <a href="/EditData" className= "p-3 bg-blue-900 text-white text-2xl rounded-lg border-2 border-black">Editar dados</a>
                        <a href="/CadastroProd" className= "p-3 bg-blue-900 text-white text-2xl rounded-lg border-2 border-black">Cadastrar produto</a>
                    </div>

                    {/* Descrição */}
                    <div className="mt-12 w-full flex"> 
                        <div className="">
                            <div className="p-5 h-fit w-fit">
                                <p className="pb-4 text-red-950 ">Descrição</p>
                                <div className=" bg-white rounded-lg border-2 border-black w-full h-fit">
                                    <p className="p-2 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, veritatis? Fuga quibusdam sunt nam culpa reprehenderit eos iste quisquam, voluptas architecto excepturi hic reiciendis ipsam quasi quos quis voluptatum labore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, libero. Accusantium incidunt numquam, quos sunt alias pariatur autem! Voluptatum beatae voluptatibus sint vitae accusantium dolorem impedit ex doloribus tempore quod.</p>
                                </div>
                            </div>  
                        </div>    
                    </div>

                    {/* INTERACOES */}
                    </div>
                    </div>
                    <Footer></Footer>
            </body>    
    )

}

export default Perfil;  