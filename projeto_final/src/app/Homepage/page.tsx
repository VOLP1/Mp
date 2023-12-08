import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Homepage() {
    return (
        <div className="bg-green-500">
            <Navbar></Navbar>
            <div className="bg-green-200 h-screen  mt-8  sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto ">
                <div className="flex items-center justify-evenly sm:grid-cols-2 my-6">
                    <img className ='h-96 w-96 mt-20' src="/img.jpg" alt="logo" />
                    <h1 className="text-slate-950 w-1/3 font-bold">Descubra a proximidade dos produtos que procura! Com a função de 
                    geolocalização, o aplicativo fornece informações em tempo real sobre a localização das lojas e a 
                    distância até cada produto desejado. Saiba exatamente onde encontrar o que procura, economizando 
                    tempo e tornando sua experiência mais eficiente!
                        Faça se login!!</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Homepage;