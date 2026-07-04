import React, { useState } from 'react'
import about from '../../assets/about.png'


const AboutMe = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <h1 className='text-3xl md:text-5xl  px-4 md:px-24 py-10  font-semibold'>About <span className='font-primrie'>Me</span></h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="px-3.5 w-full md:w-1/2">
                    <img src={about} className="w-full h-full object-cover rounded-3xl" alt="About Me" />
                </div>
                <div className="w-full xl: px-4 md:w-1/2 space-y-4 mt-3.5">

                    <p className='text-sm text-gray-400'>Hello, I'm</p>
                    <h1 className='text-4xl font font-semibold'>MD Raihan <span className='it'>
                        Hossain</span></h1>
                    <div className={`text-[16px] px-2 text-gray-400 space-y-2 md:w-xl overflow-hidden transition-all duration-500 ${showMore ? "max-h-full" : "max-h-52 md:max-h-full"
                        }`}>
                        <p>Design for me is not just work — it's the journey of turning my childhood
                            passion into professional strength.</p>
                        <p>
                            After completing my HSC in 2020, I bought a new phone and started
                            experimenting with different types of design and photo editing. At that time, I
                            also had a strong interest in gaming, but realizing that the gaming industry in
                            Bangladesh had little future, I started looking for alternatives.
                        </p>
                        <p>
                            During the pandemic, I came across opportunities in freelance graphic design
                            on my newsfeed. Since I had loved drawing since childhood and already had a
                            passion for design, I decided to take it up as a career. A successful freelancer in
                            our area — my uncle — guided me at the beginning, and with his support, my
                            graphic design journey began.
                        </p>
                        <p>
                            In the beginning, I learned and practiced different types of design, but gradually
                            I realized it's impossible to be an expert in everything. So, I narrowed down my
                            services based on my interests and strengths. A little later, I understood — if I
                            kept working across all industries, I wouldn't become an expert in any single one.
                            That's when I discovered how much I enjoyed working with real estate designs,
                            and I chose this niche.
                        </p>
                        <p>
                            While researching different real estate companies, I realized there's something
                            beyond regular design: Luxury Real Estate. Working in this segment, I felt this is
                            exactly where my creativity and passion align the most. That's why I specialized
                            in Luxury Real Estate Branding & Marketing Design.
                        </p>
                        <p>
                            Over the last 4 years, I have been working with Luxury Real Estate brands on
                            branding and marketing design. During this time, I have learned that design for
                            luxury brands is not just about stunning visuals — it's about creating a visual
                            identity that sets a brand apart from its competition. For this reason, I always
                            follow the principle of quality without compromise.

                        </p>
                        <p>
                            Today, most of my clients reach out to me because my work speaks for itself. By
                            the endless mercy of Allah, I've had the opportunity to work with real estate
                            brands in 20+ countries. I believe that premium design always leads to brand
                            growth.
                        </p>
                        <p>
                            Remember, every brand has its own story — and the right design makes that
                            story shine brighter.
                        </p>
                    </div>
                    <div className="md:hidden mt-4">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-[#6650D7] font-semibold"
                        >
                            {showMore ? "Read Less" : "Read More..."}
                        </button>
                    </div>

                    <button className="mt-6 bg-[#6650D7] px-6 py-2 rounded-xl">
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe