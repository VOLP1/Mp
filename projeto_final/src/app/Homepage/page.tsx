function Homepage() {
    return (
        <div className="bg-green-500">
            <header>
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="hidden w-full md:flex md:items-center"></div>
                        <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                            Feira Finder
                        </div>
                        <div className="flex items-center justify-end w-full"></div>
                    </div>
                    <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                        <div className="flex flex-col sm:flex-row">
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categorias</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Sobre</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Login">Login</a>
                        </div>
                    </nav>
                    <div className="relative mt-6 max-w-lg mx-auto">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>

                        <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none text-slate-950 focus:shadow-outline" type="text" placeholder="Buscar" />
                    </div>
                </div>
            </header>
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





            <footer className="bg-green-700">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-black hover:text-gray-400">Feira Finder</a>
                    <p className="py-2 text-black sm:py-0">Trabalho MP-2023-2</p>
                </div>
            </footer>
        </div>
    )
}

export default Homepage;