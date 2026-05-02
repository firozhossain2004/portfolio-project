import React from 'react'
import logo from '../assets/logo-home.png'
import { Link } from 'react-router-dom'
const Navebare = () => {
  return (
    <nav className='px-2 md:px-28 mx-auto text-center py-7'>
       <div className='flex justify-between items-center text-center'>
        <div className='w-20 md:w-32 '>
          <Link to={"/"}>
          <img src={logo}  alt="Md Raihan Hossain" />
          </Link>
        </div>
        <div className='flex gap-2 md:gap-12'>
          <ul className='flex gap-1.5 md:gap-4 mt-1.5'>
           
            <Link to={"/About"}>About</Link>
            <Link to={"/Work"}>Work</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/process"}>Process</Link>
          </ul>
          <Link to={"/contact"} className=' bg-[#6650D7] px-2 md:px-5 py-1.5 rounded-xl text-center '>Start a Project</Link>
        </div>
       </div>
    </nav>
  )
}

export default Navebare