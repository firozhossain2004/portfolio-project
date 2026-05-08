import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">


        <div>
          <h2 className="text-2xl font-bold text-fuchsia-500">Md Raihan Hossain</h2>
          <p className="mt-3 text-gray-400 text-sm">
            I create modern and creative graphic designs that bring brands to life.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 flex flex-col">
            <Link to={'/'} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Home</Link>
            <Link to={"/About"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">About</Link>
            <Link to={"/Work"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Work</Link>
            <Link to={"/services"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Services</Link>
            <Link to={"/process"} className="hover:text-fuchsia-500 transition duration-300 cursor-pointer">Process</Link>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Logo Design</li>
            <li className="text-gray-400">UI Design</li>
            <li className="text-gray-400">UI/UX Design</li>
            <li className="text-gray-400">Responsive Design</li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-fuchsia-500 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-fuchsia-500 transition duration-300">GitHub</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2026 Raihan. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;