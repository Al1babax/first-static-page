function Navbar(){
    return(
        <nav>
            <div className="container w-[550px] h-[91px] bg-navbarmain flex justify-center py-6 mx-auto mt-5">
                <div className="logo flex">
                    <img src="logo192.png" className="h-[28.93px] w-[28.93px]" alt="React logo" />
                    <h3 className="font-bold text-[22.25px] text-navbarmaintext pr-24 pl-2">ReactFacts</h3>
                </div>
                <div className="title py-2">
                    <h3 className="text-navbartext font-semibold text-base pl-24">React Course - Project 1</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;