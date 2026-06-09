import { Link } from "react-router-dom";
import logo from "../../assets/logo-home.png";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white ">

      <div className=" mx-auto flex md:flex-3 gap-8 justify-between py-4 px-28 bg-[#0d0c0c]">


        <div>
          <div className="w-20 md:w-28 ">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          </div>
          <div className="mt-10">
            <p className="mt-3 text-gray-500 text-sm ">
              Real Estate Branding &
            </p>
            <p className="text-gray-500 text-sm"> Marketing Designer</p>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-10">Quick Links</h3>
          <ul className="space-y-2 flex flex-col text-gray-500">
            <Link to={'/'} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Home</Link>
            <Link to={"/About"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">About</Link>
            <Link to={"/Work"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Work</Link>
            <Link to={"/services"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Services</Link>
            <Link to={"/process"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Process</Link>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-10">Contact</h2>
          <div className="mb-3 text-gray-500">
            <p>+880 164 662 6226</p>
            <p>info@raihanux.com</p>
          </div>
          <div className="text-gray-500">
            <p>Satkhira, Khulna, Bangladesh</p>
            <p>9400</p>
          </div>
        </div>







      </div>


      <div className="flex justify-between border-t bg-[#6650D7] py-10">
        <div className="  mt-10 pt-5 px-28  text-lg">
          © 2026 Raihan. All rights reserved.
        </div>
        <div className="flex mt-10 pt-5 gap-8 px-28 text-gray-200">
          <h3 className="text-lg  mb-3 text-white">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-fuchsia-500  transition duration-300"><FaBehance size={24} /></a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300"><FaDribbble size={24} /></a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300"><CiLinkedin size={24} /></a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300"><CiInstagram size={24} /></a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300"><CiFacebook size={24} /></a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300"><FaXTwitter size={24} /></a>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;