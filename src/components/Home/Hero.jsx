import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../../assets/homeimg/heroimg.png'



const Hero = () => {
    return (
        <div className='md:mb-20'>
            <div className="w-full h-52 md:h-screen  bg-cover object-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${heroimg})` }}>
            </div>
            <div className='text-center mx-auto py-10 md:py-10 space-y-4 px-3'>
                <h1 className='text-2xl md:text-[56px]  py-4 leading-tight'>
                    <span className=' font-primrie'>Luxury</span> <span className='font-semibold'>Real Estate</span> <br />
                    <span className='font-semibold'>Branding That Sells</span> <span className='font-primrie italic '>Dreams</span>
                </h1>
                <p className='text-sm md:text-xl'>Trusted by brands in 20+ countries</p>
                <Link
                    to={"/contact"}
                    className='bg-[#6650D7] px-5 py-2 rounded-xl inline-block'
                >
                    Contact Now
                </Link>
            </div>


        </div>
    )
}

export default Hero