import React from 'react'
import about from '../../assets/about.png'


const AboutMe = () => {
    return (
        <div>
            <h1 className='text-5xl px-2 md:px-28 py-10  font-medium'>About <span className='font-Englisc'>Me</span></h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="px-3.5 w-full md:w-1/2">
                    <img src={about} className="w-full h-full object-cover rounded-3xl" alt="About Me" />
                </div>
                <div className="w-full xl: px-2 md:w-1/2 space-y-4">

                    <p className='text-sm text-gray-400'>Hello, I'm</p>
                    <h1 className='text-2xl font font-semibold'>MD Raihan Hossain</h1>
                    <div className='text-sm text-gray-400 space-y-4'>
                        <h2>Design for me is not just work—it’s the journey of turning my childhood passion
                            into professional strength.</h2>


                        <p>
                            Over the last 4 years, I have been working with Luxury Real Estate brands on
                            branding and marketing design. During this time, I have learned that design for
                            luxury brands is not just about stunning visuals—it’s about creating a visual identity
                            that sets a brand apart from its competition. For this reason, I always follow the
                            principle of quality without compromise.
                        </p>
                        <p>
                            Over the last 4 years, I have been working with Luxury Real Estate brands on
                            branding and marketing design. During this time, I have learned that design for
                            luxury brands is not just about stunning visuals—it’s about creating a visual identity
                            that sets a brand apart from its competition. For this reason, I always follow the
                            principle of quality without compromise.
                        </p>
                        <p>
                            Over the last 4 years, I have been working with Luxury Real Estate brands on
                            branding and marketing design. During this time, I have learned that design for
                            luxury brands is not just about stunning visuals—it’s about creating a visual identity
                            that sets a brand apart from its competition. For this reason, I always follow the
                            principle of quality without compromise.
                        </p>
                        <p>
                            Over the last 4 years, I have been working with Luxury Real Estate brands on
                            branding and marketing design. During this time, I have learned that design for
                            luxury brands is not just about stunning visuals—it’s about creating a visual identity
                            that sets a brand apart from its competition. For this reason, I always follow the
                            principle of quality without compromise.
                        </p>
                        <p>
                            Today, most of my clients reach out to me because my work speaks for itself. By the
                            endless mercy of Allah, I’ve had the opportunity to work with real estate brands in
                            20+ countries. I believe that premium design always leads to brand growth.
                        </p>
                        <p>
                            Remember, every brand has its own story—and the right design makes that story
                            shine brighter
                        </p>

                    </div>

                    <button className="mt-6 bg-linear-to-r from-purple-600 to-indigo-500 px-6 py-2 rounded-xl hover:opacity-90 transition">
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe