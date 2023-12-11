function Header(){
    return(
        <header className="bg-green-500">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="hidden w-full md:flex md:items-center"></div>
                        <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Homepage">Feira Finder</a>
                        </div>
                        <div className="flex items-center justify-end w-full"></div>
                    </div>
                    <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                        <div className="flex flex-col sm:flex-row">
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Homepage">Home</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Feed">Shop</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Login">Login</a>
                        </div>
                    </nav>
                    
                </div>
            </header>
    )

}

export default Header;
