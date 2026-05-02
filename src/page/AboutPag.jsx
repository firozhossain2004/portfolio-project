import React from 'react'
import about from '../assets/about.png'
import LogoCount from '../components/LogoCount'
import { experiences } from '../js/exprience'
import { features } from '../js/features'
import img1 from '../assets/about-img/img1.png'
import img2 from '../assets/about-img/img2.png'
import img3 from '../assets/about-img/img3.png'
import img4 from '../assets/about-img/img4.png'
import img5 from '../assets/about-img/img5.png'
import img6 from '../assets/about-img/img6.png'


const AboutPag = () => {
    return (
        <div className=''>
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
            <div className='px-10 md:px-20 mt-28 mb-28 md:flex gap-28'>

                <h1 className='text-5xl font-medium'>
                    Work <span className='font-Englisc'>Experience</span>
                </h1>

                <div>
                    {experiences.map((item) => (
                        <div
                            key={item.id}
                            className='md:w-2xl mt-10 space-y-3'
                        >
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl'>{item.company}</h1>
                                    <p className='text-sm text-gray-400'>
                                        {item.role}
                                    </p>
                                </div>

                                <p className='text-xs  text-gray-400'>
                                    {item.duration}
                                </p>
                            </div>

                            <p className='text-sm text-gray-400'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-22 mb-20'>
                <div>
                    <h6 className='text-[#6650D7] mb-4'>WHY CHOOSE ME</h6>
                    <h1 className='text-5xl  md:w-2xl'>I <span className='font-Englisc'>Design </span> for the <span className='font-Englisc'>Future</span> to Drive
                        Today’s <span className='font-Englisc'></span>Success</h1>
                </div>
                <div className="bg-black text-white px-10 py-20">

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2  gap-8 ">

                        {/* Top 2 Large Cards */}
                        {features.slice(0, 2).map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#1c1c1c] p-10 rounded-3xl hover:bg-[#222] transition "
                            >
                                <h2 className="text-2xl md:text-3xl mt-20 mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                   
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-8">

                        {features.slice(2).map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#1c1c1c] p-8 pb-20 rounded-3xl hover:bg-[#222] transition"
                            >
                                <h2 className="text-xl md:text-2xl mb-3 mt-20">
                                    {item.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            <div>
                <div className='text-center mb-15'>
                    <h1 className='text-5xl'>Work <span className='font-Englisc'>Stats</span></h1>
                </div>
                {/* COUNT */}
                <div>
                    <div className='md:flex flex-2 justify-between px-50 mx-auto items-center mb-10'>
                        <div>
                            <div className='space-y-10 md:flex items-center gap-44 '>

                                <div>
                                    <LogoCount end={4} />
                                    <p className='text-sm text-gray-400 w-20'>Years of Experience</p>
                                </div>
                                <div>
                                    <LogoCount end={3} />
                                    <p className='text-sm text-gray-400 w-40'>Recognitions</p>
                                </div>
                                <div>
                                    <LogoCount end={500} />
                                    <p className='text-sm text-gray-400 w-40'>Projects Completed</p>
                                </div>
                                <div>
                                    <LogoCount end={98} />
                                    <p className='text-sm w-40 text-gray-400'>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className='text-center font-medium md:text-5xl md:w-3xl mx-auto mb-24'>
                    I Create <span className='font-Englisc'>Memorable Experiences</span>
                    for your Brand from<span className='font-Englisc'> Bangladesh</span>
                    to the <span className='font-Englisc'>World.</span>
                </div>


                <div className='px-36'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-52 items-center max-w-5xl w-full mb-24">

                        {/* Left Small Image */}
                        <div className="flex justify-center md:justify-end mt-44">
                            <img
                                src={img1}
                                alt="profile"
                                className="w-72 h-80 object-cover rounded-3xl"
                            />
                        </div>

                        {/* Right Big Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img2}
                                alt="profile"
                                className="w-96 h-[500px] object-cover rounded-3xl"
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-52 items-center max-w-5xl w-full ">

                        {/* Left Small Image */}
                        <div className="flex justify-center md:justify-end mt-44">
                            <img
                                src={img3}
                                alt="profile"
                                className="w-96 h-[500px] object-cover 
                                rounded-3xl"
                            />
                        </div>

                        {/* Right Big Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img4}
                                alt="profile"
                                 className="w-72 h-80 object-cover rounded-3xl"
                               
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-52 items-center max-w-5xl w-full mb-24">

                        {/* Left Small Image */}
                        <div className="flex justify-center md:justify-end mt-44">
                            <img
                                src={img5}
                                alt="profile"
                                className="w-72 h-80 object-cover rounded-3xl"
                            />
                        </div>

                        {/* Right Big Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img6}
                                alt="profile"
                                className="w-96 h-[500px] object-cover rounded-3xl"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutPag