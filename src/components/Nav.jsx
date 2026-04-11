import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";




export default function Nav() {
    return (
        <div className=''>

            <nav className="w-full px-6 py-4 bg-[#131722] text-white  flex items-center justify-between fixed top-0 z-50">
                <div className=' gap-4 items-center'>
                    <p className='font-bold text-4xl '>Noxe</p>
                </div>

                <div className=" flex gap-4 font-bold text-2xl ">
                    <a href="https://www.facebook.com/mohamed.fahmy.754"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/moo__fahmy?igsh=MXI2Z2xkdXV2d2Zpcg=="><FaInstagramSquare /></a>
                    <a href="https://twitter.com/MohamedFahmy10"><FaTwitterSquare /></a>
                    <a href="https://wa.me/qr/MG5YYRSPKHFDO1"><FaWhatsappSquare /></a>
                    <a href="Login" className="hover:text-gray-300">Login</a>
                    <a href="Register" className="hover:text-gray-300">Register</a>
                </div>
            </nav>
        </div>
)
}
