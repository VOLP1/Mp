function Homepage() {
    return (
        <div className="bg-gray-300">
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
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Login</a>
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
            <div className="bg-gray-200 h-screen  mt-8  sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto ">
                <div className="flex items-center justify-around sm:grid-cols-2 y-8 my-6">
                    <img className ='h-96 w-96 mt-20' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAABm1BMVEX////LABDuNhYOq2Hg9P683P4Vm+H+2UFdyYP8vindIxPm9/+e0PEAl+DIAACFwvE+unPx+v9FtHnh7/9WyIXaz7G42/o6sHn+vRbtJQD/2DUAqFft6baEyL/P6P4Ar2P/3TDuMAqAzHkAl+j22EXtEQDlm52ovpUAlev/wAD+9fT66Oj1npb22tr4vbbwxMX2p5/SQkPOKSre/v/WAACxwI360Mv0j4bze2zwV0LvRCjXYmPfgIDqs7PLFxnhi4v0hnvvSjXUTk7PNjfxYFPmenbybl7qqKjObnfg6PC8y+rDkKbmz9PGr8fHXWvN3vxXu4i0YTDaTA3/yVysvG6m2si0ukA9q1Rti02tgDitRS2X0NVmwpcyo1zbQRxglFOEza6WcT6aVzRmvaJDmVa0y1DtnTCFaD70fiidwlLm106Yy27NXDe1NyOJvVVuvXq+49+Gr3Ghklu4fExstFXKzUbw5Z1LpNDjzpzMy33nvDDm7dRirMv35IrazmjVuznwyneIppygrZVyrru3sXvMtm1Vr+rUuVvBzcA+e1BUAAAHV0lEQVR4nMWa+0MTRxDHTQIJacxRBJELCklDLElMFAzB8IgICrXVitKCtT76UFvUYh+21Gi1LTb6Z3cvuT3udmf29rIbnJ+Tm8999zuzrzt0qMMoVsuz52pz4Q9Coen5hcXTxU4f1FEUqrO1sGmamUzYIggZJOpT50uFA8pfPFUjycN2WAStIBRTJw+CobjkSu8maEOc7/ZoFJZyZtgTboIWxPmu6lCeY/JzBIRh5XTX8heWPPojBJYM3QK4wAkAEhCG5a6MRBUQACEIGdOlLgCEQQCYgJhBO0IJAUAICILmsixgABgBGQi9BDXIhEKCkDGvE2AWBcAJQsZJfQBVHEBAEDL0ufECZgIfgmVdAKcEEogIQsaaHoCCCEBIEDL0EAgl8CHQIkJBlN+PYFrHBHEm1zmBHhEuCgohnDErhpBAQ1sq4QAZ0wyvXpqy1qk4gnpPwH2Yq5Xbs09xbQVF0LBaqSEamOGy61drmAzGlCpAERHArHnlLaEyqM7SZXgQMnPsg0t1RIRFRQLEBjneYCVYBOUZEq5Fcxb46QKIoDw9IYMADW4REUGRAGyI5ir422VYBLXGXIQJyuCP12ACtZ5UhQmq4I9PwwRqm7gySJCBXwuuBsXJ6QzsxEAEauUIEwQbha4QwE5cPECCQNXYDYJgHUmNAJmYAnRl1VqA+wE4M1WxFYJaP4B7IhmGC+w4FKcxAsV1GrZQNmvedl9EVyiqMxO6ZcyYUqu0kFFXJFjCN0zmxfZKtVBcnBIslhcUCZBisGWYWz13aX65Llitq+9ZSsJNY2vHItyyaNgwiM4OrBDv2nQcJwmMIEVwSZlAdIIjQ6C6WLfOcsXD4EMwreFY0WcYfHbv6oOATw1yBPBaJlj4DMMBnKEonSPpuWkoCIdBTKDpnuFcx+eJuo6WhS1BSKDtxgk7R/EhUD8/cUI0QYoI1PshjYLgRE9wuj+l8b4L3j76EWg6124H7gT8jmVF65Uf3ppxAn0uaAUqAnrTtaIXAO8JKIH22+dVBAG7b9R2w+NEKZgGWm65BryB3Pght76f9Ax6YiB4/kQPE5eDaGB82svEWGABWICes4tgRcJ3758NswSBETgAggBWJPj9wQoP0NurKgGJK9JfQFyFCAYDEXAuaIkAmREgMD6HAHqHlSUgZgQWrcB3KNOcDduRUJXAGgfejADB1bFrw+7oxIs04/oRJq5zIvAENzY2vjjmjnXKIN8U7EFIfDkaYcOfoBLf3PL+Z/REYBFsBRJHOIDxmywCS2B8Nc79KxK0IAUSRMbZcWC/CrsFAIx+HbAgbR8mbgMEkTt3hQT1+xDB7YAiUB9CAJHxezkBQeUmAEAQqBflCpJK8A1IEBn/1kQJjO9AgMjo90G86HQj8FkWwl3s+8RQHQYgEaQgEwIftuM+qsE9jCBQQeKlSJ/24GEGJKj8gEoQOdYrLQIdhJ8RCbYexGKxHzMAAViIDrZ8QdoAA+sgwdaDiZgVNwCC+h0Rwfo1yYKkEpwFAbbb+WOxOE9QQU3QRhiWFIH2Q6gUnfwkHrIEIhO0CGQLkvoQyB9zR5pawSaoIJ0AEEHsRbQU3e9vxaPHTzJugp988ksXpLMw8P575xGbv2/oqUcDaDpg4piMCHAp7njfPzVB8vf1Df2ScwiQ6YARQaYgqQvcsyKb/9HjIZKfxNCvpk3g50KbYN1/hnQk2P/bM0b/9vvb8ZvZIsDmIy78ReBmRS7/tis/iScmITBuyeXfL8hrvj6UzE/iei5XuRWRlCAy6jc5eFdnbP5Y7CM2P/HC03uiXswS+BWke1bk8xMNAIS+D6Xzkzgi9iKVgJTis9/5/AhCIAKfgnQWqFve/Kl0WjAQgQgidMkK7iGdUvTmT0/MJD8WIAQj2BwTLFnpXvGPtCt/Kjazm026ELiBCEKw3cj/OYx7kfrQ1QJTqeckfzQazeII8gQ7jXg83sAnBzoIx1P74/98d9LKT2JyBhsIWYJW/ng8fxQtSNqNJtj3txEwL8gR2PndImASvEjR/C+T+/lJYF6QIXj2Ou5E/jJSkNSHf6Va+r96mfXkx73gT+DOH4+P/I10JerDdDv/JJsf9YIfgTd/fCT+z2GwIJ1STIHvz6mwjyAmYPLnG/9Gs03Ii9QFiYn0q70onB/xgohgi3l/kt96NjRDUgmOT+wl0fywFwQEm978I292s6336AdEoBLsIfoLvIARbDH582+aWfoUXgQ6Kw775Ie8ABOw+a3333849eIgK8FA05+A8wJIsM3k/2/XM7hNdg/pnFlIABAVZjwIAMFmw5M//5YtrmQvIwJdGPRLETBe4AiY9+fzWyIwXqQSSOWPMl5gCHa49weLy+tFKsFhOQmijBcE+UfeIs2FKUhais2kdJCZMtWO9Mb9URo7jRF35Bt7ySzygKZbBMeHhwNE/4vjdhy9csKOd0e98a7Zj4fbixSgJxEknH/RhV+ngV5mSIcqQeK9E4yh1ykHR/C+NRjE75QOiMAzLbwHAtKR/gdufF91Q6E2WgAAAABJRU5ErkJggg==" alt="" />
                    <h1 className="text-slate-950">Faça se cadastro e encontre sua loja de interesse!!</h1>
                </div>
            </div>





            <footer className="bg-gray-400">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-gray-500 hover:text-gray-400">Feira Finder</a>
                    <p className="py-2 text-gray-500 sm:py-0">Trabalho MP-2023-2</p>
                </div>
            </footer>
        </div>
    )
}

export default Homepage;