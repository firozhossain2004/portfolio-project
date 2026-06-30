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
    <footer className="bg-black text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-12 bg-[#0d0c0c]">

     
        <div>
          <div className="w-24 md:w-28">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-gray-500 text-sm">
              Real Estate Branding &
            </p>
            <p className="text-gray-500 text-sm">
              Marketing Designer
            </p>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="md:space-y-3 flex flex-row md:flex-col gap-2.5 text-gray-500">
            <Link to="/" className="hover:text-fuchsia-500">
              Home
            </Link>

            <Link to="/about" className="hover:text-fuchsia-500">
              About
            </Link>

            <Link to="/work" className="hover:text-fuchsia-500">
              Work
            </Link>

            <Link to="/services" className="hover:text-fuchsia-500">
              Services
            </Link>

            <Link to="/process" className="hover:text-fuchsia-500">
              Process
            </Link>
          </ul>
        </div>

     
        <div>
          <h2 className="text-lg font-semibold mb-6">
            Contact
          </h2>

          <div className="mb-4 text-gray-500">
            <p>+880 164 662 6226</p>
            <p>info@raihanux.com</p>
          </div>

          <div className="text-gray-500">
            <p>Satkhira, Khulna, Bangladesh</p>
            <p>9400</p>
          </div>
        </div>
      </div>

     
      <div className="bg-[#6650D7] px-6 md:px-20 py-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">

          <p className="text-sm md:text-base text-center">
            © 2026 Raihan. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-medium">
              Follow Me
            </span>

            <a
              href="https://www.behance.net/b4raihan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance size={22} />
            </a>

            <a href="https://dribbble.com/b4raihan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble size={22} />
            </a>

            <a href="#">
              <CiLinkedin size={22} />
            </a>

            <a href="#">
              <CiInstagram size={22} />
            </a>

            <a href="#">
              <CiFacebook size={22} />
            </a>

            <a href="#">
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;