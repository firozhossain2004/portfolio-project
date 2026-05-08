import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../../assets/homeimg/heroimg.png'



const Hero = () => {
    return (
        <div>
            <div className="w-full h-[60vh] md:h-screen  bg-cover object-cover bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${heroimg})` }}>
            </div>
            <div className='text-center mx-auto py-10 md:py-20 space-y-4 px-3'>
                <h1 className='text-2xl md:text-5xl font-semibold py-4 leading-tight'>
                    <span className='italic font-Englisc'>Luxury</span> Real Estate <br />
                    Branding That Sells <span className='italic font-Englisc'>Dreams</span>
                </h1>
                <p>Trusted by brands in 20+ countries</p>
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