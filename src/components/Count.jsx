import React from 'react'
import LogoCount from './LogoCount'
const Count = () => {
    return (
        <div>
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
        </div>
    )
}

export default Count