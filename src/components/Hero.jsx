import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/heroimg.png'
import LogoCount from './LogoCount'
import lastlogo from '../assets/lastLogo.png'
import LatestPortfolio from './LatestPortfolio'
import { Imgs } from '../js/brendimg.js'


const Hero = () => {
    return (
        <div className='px-2'>
            <div >
                <img src={heroimg} className="w-full h-screen object-top object-cover " alt="Md Raihan Hossain" />
            </div>
            <div className='text-center mx-auto py-20 space-y-4' >
                <h1 className='text-2xl md:text-5xl font-semibold py-4'>
                    <span className='italic font-Englisc'>Luxury</span> Real Estate <br />
                    Branding That Sells <span className='italic font-Englisc'>Dreams</span>
                </h1>
                <p className=''>Trusted by brands in 20+ countries</p>
                <Link to={"/contact"} className='bg-[#6650D7] px-5  py-1.5 rounded-xl '>Contact Now</Link>
            </div>
            <div className=' flex flex-col md:flex-row mb-10'>
                {Imgs.map((item) => (
                    <img
                        key={item.id}
                        src={item.img}
                        className="h-14 md:h-8 mx-9 my-10 object-contain"
                        alt=""
                    />
                ))}
            </div>

            

            <h1 className='text-3xl md:text-5xl font-bold italic px-2 mb-5'><span className='italic font-Englisc'>Worked</span> with</h1>
            <div className='space-y-15 md:flex flex-2 justify-between px-50 mx-auto items-center mb-10 '>
                <div>
                    <div className='md:flex gap-10'>
                        <div className='mb-13 space-y-15'>
                            <div>
                                <LogoCount end={4} />
                                <p className='text-sm text-gray-400 w-20'>Years of Experience</p>
                            </div>
                            <div>
                                <LogoCount end={20} />
                                <p className='text-sm text-gray-400 w-40'>Countries with
                                    Global Luxury Clients</p>
                            </div>
                        </div>
                        <div className='space-y-15'>
                            <div>
                                <LogoCount end={150} />
                                <p className='text-sm text-gray-400 w-40'>Elite Real Estat
                                    Brands & Agencies</p>
                            </div>
                            <div>
                                <LogoCount end={600} />
                                <p className='text-sm w-40 text-gray-400'>High-End Projects Delivered with Distinction</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <img src={lastlogo} className=' w-xs rounded-2xl' alt="" />
                </div>
            </div>
            <LatestPortfolio />

        </div>
    )
}

export default Hero