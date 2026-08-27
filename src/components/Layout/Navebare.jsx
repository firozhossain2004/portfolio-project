import React, { useState } from "react";
import logo from "../../assets/logo-home.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navebare = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 md:top-0 z-50 bg-black text-white px-4 md:px-20  py-4">

      <div className="flex justify-between items-center">

        
        <div className="w-20 md:w-28">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

       
        <div className="hidden md:flex items-center gap-10">
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
         

          <Link
            to="/contact"
            className="bg-[#6650D7] px-5 py-2 rounded-xl"
          >
            Start a Project
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

 
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black p-4 rounded-xl border border-gray-700">

          <Link onClick={() => setOpen(false)} to="/about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} to="/work">
            Work
          </Link>
          <Link onClick={() => setOpen(false)} to="/services">
            Services
          </Link>
          

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="bg-[#6650D7] px-4 py-2 rounded-xl text-center"
          >
            Start a Project
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navebare;