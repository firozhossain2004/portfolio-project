import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../assets/heroimg.png'
import LogoCount from './LogoCount'
import lastlogo from '../assets/lastLogo.png'
import LatestPortfolio from './LatestPortfolio'
import { Imgs } from '../js/brendimg.js'
import LogoSlider from './LogoSlider.jsx'

const Hero = () => {
    return (
        <div className='px-2'>

         
            <div>
                <img 
                  src={heroimg} 
                  className="w-full h-[60vh] md:h-screen object-top object-cover" 
                  alt="Md Raihan Hossain" 
                />
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

            
            <div className='flex flex-wrap justify-center items-center gap-6 mb-10'>
               <LogoSlider/>
            </div>

          
            <h1 className='text-3xl md:text-5xl font-bold italic px-2 mb-10 text-center md:text-left'>
                <span className='font-Englisc'>Worked</span> with
            </h1>

           
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center px-4 md:px-20 mb-10'>

                {/* LEFT COUNTS */}
                <div className='grid grid-cols-2 gap-10'>
                    
                    <div>
                        <LogoCount end={4} />
                        <p className='text-sm text-gray-400'>Years of Experience</p>
                    </div>

                    <div>
                        <LogoCount end={20} />
                        <p className='text-sm text-gray-400'>Countries with Global Luxury Clients</p>
                    </div>

                    <div>
                        <LogoCount end={150} />
                        <p className='text-sm text-gray-400'>Elite Real Estate Brands</p>
                    </div>

                    <div>
                        <LogoCount end={600} />
                        <p className='text-sm text-gray-400'>Projects Delivered</p>
                    </div>

                </div>

                
                <div className='w-full md:w-auto flex justify-center'>
                    <img 
                      src={lastlogo} 
                      className='w-56 md:w-xs rounded-2xl' 
                      alt="" 
                    />
                </div>

            </div>

            <LatestPortfolio />

        </div>
    )
}

export default Hero