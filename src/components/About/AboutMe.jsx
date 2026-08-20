import React, { useState } from 'react'
import about from '../../assets/about.png'
import { Link } from 'react-router-dom';


const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h1 className='text-3xl md:text-5xl  px-4  py-5  font-semibold'>About <span className='font-primrie'>Me</span></h1>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">


          <div className="w-full flex justify-center h-full">
            <img
              src={about}
              alt="About Me"
              className="w-full max-w-md lg:max-w-xl rounded-3xl object-cover"
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
              className={`text-gray-400 leading-8 space-y-1 overflow-hidden transition-all duration-500 ${showMore
                ? "max-h-[3000px]"
                : "max-h-56 lg:max-h-full"
                }`}
            >
              <p>
                Design for me is not just work — it's the journey of turning my
                childhood passion into professional strength.
              </p>

              <p>
                After completing my HSC in 2020, I bought a new phone and started
                experimenting with different types of design and photo editing. At
                that time, I also had a strong interest in gaming, but realizing that
                the gaming industry in Bangladesh had little future, I started looking
                for alternatives.
              </p>

              <p>
                During the pandemic, I came across opportunities in freelance graphic
                design on my newsfeed. Since I had loved drawing since childhood and
                already had a passion for design, I decided to take it up as a career.
                A successful freelancer in our area guided me at the beginning, and
                with his support, my graphic design journey began.
              </p>

              <p>
                While researching different real estate companies, I realized there's
                something beyond regular design: Luxury Real Estate. Working in this
                segment, I felt this is exactly where my creativity and passion align
                the most.
              </p>

              <p>
                Today, most of my clients reach out to me because my work speaks for
                itself. By the endless mercy of Allah, I've had the opportunity to
                work with real estate brands in 20+ countries.
              </p>

              <p>
                Remember, every brand has its own story — and the right design makes
                that story shine brighter.
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