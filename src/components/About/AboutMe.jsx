import React, { useState } from 'react'
import about from '../../assets/about.png'



const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h1 className='text-3xl md:text-5xl  px-4 md:px-15  py-5  font-semibold'>About <span className='font-primrie'>Me</span></h1>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  items-center">


          <div className="w-full flex justify-center h-full">
            <img
              src={about}
              alt="About Me"
              className="w-full max-w-md  rounded-3xl object-cover"
            />
          </div>


          <div className="w-full">

            <p className="text-sm text-gray-400">
              Hello, I'm
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-1 mb-3">
              MD Raihan <span className="it">Hossain</span>
            </h1>

            <div
              className={`text-gray-400  overflow-hidden leading-7  transition-all duration-500 ${showMore
                ? "max-h-750"
                : "max-h-56 lg:max-h-full"
                }`}
            >
              <p>
                Design, for me, is more than work. It’s a journey that turned my childhood passion into a professional strength.
                After completing my HSC in 2020, I got a new phone and started experimenting with design and photo editing. I was also passionate about gaming, but I soon realized it had limited opportunities in Bangladesh, so I started exploring other paths.
                During the pandemic, I discovered freelance graphic design. Since I had loved drawing and design from childhood, choosing it as a career felt natural. With guidance from an experienced freelancer in my area, I took my first steps into the industry.
                While researching real estate brands, I discovered the world of Luxury Real Estate. I quickly realized that this was where my creativity and passion truly belonged.
                Today, many of my clients find me through my work. By the endless mercy of Allah, I’ve had the opportunity to work with real estate brands across 20+ countries.
                Every brand has a story. I believe the right design can make that story shine brighter.

              </p>
            </div>


            <div className="lg:hidden mt-5">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-[#6650D7] font-semibold"
              >
                {showMore ? "Read Less" : "Read More..."}
              </button>
            </div>

            <a
              href="https://drive.google.com/file/d/10GRe7PtreCriodS-mSRb1SOwmGZxbK11/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#6650D7] hover:bg-[#5740d4] transition px-6 py-3 rounded-xl"
            >
              Download Now
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutMe