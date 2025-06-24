import {
FaApple,
FaSearch,
FaShoppingCart,
}from "react-icons/fa"

function Navbar() {

    return <>
    <nav className="sticky top-0 z-40 backdrop-blur-sm bg-white/50">
        <ul className="flex items-center justify-center gap-10 text-sm-5 text-black px-4 py-2 ">
            <li><FaApple/></li>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertainment</li>
            <li>Accessories</li>
            <li>Support</li>
            <li><FaSearch/></li>
            <li><FaShoppingCart /></li> 
        </ul>
        </nav>

    </>
}

export default Navbar;