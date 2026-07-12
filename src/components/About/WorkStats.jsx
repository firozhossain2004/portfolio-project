import React from 'react'
import LogoCount from '../LogoCount'
const WorkStats = () => {
    return (
        <div>
            <div className='text-center mb-12'>
                <h1 className='text-5xl'><span className='font-semibold'>Work</span> <span className='font-primrie'>Stats</span></h1>
            </div>

            <div>
                <div className='flex justify-center  px-8 items-center mb-10'>

                    <div className="grid grid-cols-2 md:grid-cols-4   text-center w-full">

                        <div>
                            <LogoCount end={4} />
                            <p className="text-sm text-gray-400">
                                Years of Experience
                            </p>
                        </div>

                        <div>
                            <LogoCount end={2} />
                            <p className="text-sm text-gray-400">
                                Industry Recognitions
                            </p>
                        </div>

                        <div>
                            <LogoCount end={500} />
                            <p className="text-sm text-gray-400">
                                Projects Completed
                            </p>
                        </div>

                        <div>
                            <LogoCount end={98} />
                            <p className="text-sm text-gray-400">
                                Client Satisfaction Rate
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default WorkStats