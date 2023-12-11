import LoginButton from "./Login_Button";

function NavbarLog(){
    return(
        <header className="bg-green-500">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="hidden w-full text-black md:flex md:items-center">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Homepage">Feira Finder</a>
                        </div>
                        <div className="flex items-center justify-end w-full">
                            <a href="/Carrinho">
                                <button className="text-black focus:outline-none mx-4 sm:mx-0">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </button>
                                </a>
                        </div>
                    </div>   
                    <nav className="sm:flex sm:justify-center sm:items-center mt-4">
                        <div className="flex flex-col  sm:flex-row">
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Homepage">Home</a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Feed">Shop</a>
                            <LoginButton></LoginButton>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/Perfil">Perfil</a>
                        </div>
                    </nav>
                    
                </div>
            </header>
    )

}

export default NavbarLog;
