import React from 'react'
import LogoCount from './LogoCount'
const Count = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-10'>

                <div>
                    <LogoCount end={4} />
                    <p className='text-sm text-gray-400 w-17'>Years of Experience</p>
                </div>

                <div>
                    <LogoCount end={20} />
                    <p className='text-sm text-gray-400 w-36'>Countries with
                        Global Luxury Clients</p>
                </div>

                <div>
                    <LogoCount end={150} />
                    <p className='text-sm text-gray-400 w-32'>Elite Real Estat
                        Brands & Agencies</p>
                </div>

                <div>
                    <LogoCount end={500} />
                    <p className='text-sm text-gray-400 w-44'>High-End Projects
                        Delivered with Distinction</p>
                </div>

            </div>
        </div>
    )
}

export default Count