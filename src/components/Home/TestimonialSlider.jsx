import { useState,useEffect } from "react";
import img1 from "../../assets/homeimg/client.png"
const testimonials = [
    {
        id: 1,
        name: "Elias Ayyoub",
        role: "Projects Manager",
        company: "almadd contracting",
        image: img1,
        text: " worked with Raihan on several projects, including the Olive Tree Residence brochure, and their creativity and attention to detail always stand out.They deliver high-quality work and are a pleasure to collaborate with.Raihan showed me firsthand their professionalism and dedication.Highly recommended!",

    },
    {
        id: 1,
        name: "Elias Ayyoub",
        role: "Projects Manager",
        company: "almadd contracting",
        image: img1,
        text: " worked with Raihan on several projects, including the Olive Tree Residence brochure, and their creativity and attention to detail always stand out.They deliver high-quality work and are a pleasure to collaborate with.Raihan showed me firsthand their professionalism and dedication.Highly recommended!",

    },

];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);



  const { name, role, company, image, text } = testimonials[current];

  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl border border-neutral-800 bg-black px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
      
      <div
        className={`transition-all duration-300 ${
          animating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {isMobile ? (
         
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <img
              src={image}
              alt={name}
              className="h-28 w-28 md:h-64 md:w-full rounded-lg object-cover "
            />
            <div className="w-full text-center">
              <p className="mb-3 text-3xl font-black text-white sm:mb-4 sm:text-4xl">"</p>
              <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:mb-8 sm:text-base">
                {text}
              </p>
              <div className="mb-2 sm:mb-3">
                <p className="text-base font-bold text-white sm:text-lg">{name}</p>
                <p className="text-xs text-gray-500 sm:text-sm">{role}</p>
              </div>
              <p className="text-xs italic text-gray-400 sm:text-sm">{company}</p>
            </div>
          </div>
        ) : (
     
          <div className="flex items-center gap-8 lg:gap-10">
            <div className="h-72 w-56 flex-shrink-0 overflow-hidden rounded-lg md:h-50 md:w-50">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <p className="mb-4 text-4xl font-black text-white lg:mb-5 lg:text-5xl">"</p>
              <p className="mb-6 text-sm leading-relaxed text-gray-300 lg:mb-8 lg:text-base">
                {text}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-bold text-white lg:text-lg">{name}</p>
                  <p className="text-xs text-gray-500 lg:text-sm">{role}</p>
                </div>
                <p className="text-xs italic text-gray-400 lg:text-sm">{company}</p>
              </div>
            </div>
          </div>
        )}
      </div>


      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute md:left-1 md:top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 text-white transition-all hover:border-gray-400 hover:bg-white/5   "
      >
        &#8592;
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 md:top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 text-white transition-all hover:border-gray-400 hover:bg-white/5 "
      >
        &#8594;
      </button>

  
      <div className="mt-6 flex justify-center gap-2 sm:mt-7">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

