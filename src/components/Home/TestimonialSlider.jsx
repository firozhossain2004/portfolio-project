import { useState, useEffect } from "react";

import img1 from "../../assets/homeimg/clientimg/Elias Ayyoub, PMP.webp";
import img2 from "../../assets/homeimg/clientimg/Rashed Al M..webp";
import img3 from "../../assets/homeimg/clientimg/Constantin Khireche.webp";
import img4 from "../../assets/homeimg/clientimg/Dalal Al Douba.webp";
import img5 from "../../assets/homeimg/clientimg/Madhi.webp";
import img6 from "../../assets/homeimg/clientimg/Norah.webp";
import img7 from "../../assets/homeimg/clientimg/Aaron.webp";

const testimonials = [
  {
    id: 1,
    name: "Elias Ayyoub, PMP",
    role: "Projects Manager",
    image: img1,
    text: "I've worked with Raihan on several projects, including the Olive Tree Residence brochure, and their creativity and attention to detail always stand out. They deliver high-quality work and are a pleasure to collaborate with. Raihan showed me firsthand their professionalism and dedication. Highly recommended!",
  },
  {
    id: 2,
    name: "Rashed Al M.",
    role: "Consultant at Confidential",
    image: img2,
    text: "I asked for something very specific: turning multiple articles and photos into one clean, elegant, luxury-style book. He understood everything from the first day and delivered ahead of schedule, even while dealing with exams and fever. His work with the Arabic content was surprisingly professional, as if it were his native language. The final result was beyond what I imagined. He's talented, reliable, and great to work with.",
  },
  {
    id: 3,
    name: "Constantin Khireche",
    role: "Manager",
    image: img3,
    text: "Working with Raihan on the La Lourde Catalog 2024 - 2025 was a really great experience. He was patient, understanding, and creative throughout the process, always taking the time to understand what we needed. He did a great job presenting our interior door models in a clean and professional way. I'm very happy with the final result and would definitely recommend Raihan for design work.",
  },
  {
    id: 4,
    name: "Dalal Al Douba",
    role: "Marketing Head",
    image: img4,
    text: "We worked with Raihan on three Arabic brochures for Heyazah Real Estate Development, and the experience was excellent from start to finish. He understood the direction quickly, handled the details carefully, and was always responsive to our feedback. The final designs looked professional and matched what we had in mind. We were very happy with the result and would gladly work with Raihan again.",
  },
  {
    id: 5,
    name: "Madhi",
    role: "Founder",
    image: img5,
    text: "Raihan did a great job on our brochure, postcard, and flyer project. I was really happy with what he delivered and especially appreciated his professionalism and dedication throughout the process. He was easy to communicate with, understood what we needed, and made sure the final work was right. Thank you, my friend. I would happily recommend Raihan for design projects.",
  },
  {
    id: 6,
    name: "Norah",
    role: "Project Manager",
    image: img6,
    text: "Working with Raihan on three luxury Arabic real estate brochures for Rasa Real Estate was a fantastic experience. He understood our vision, paid close attention to the details, and delivered designs that genuinely impressed us. We were so happy with his work and the way he handled the project that we even offered Raihan a job opportunity. He is talented, professional, and definitely someone I would recommend.",
  },
  {
    id: 7,
    name: "Aaron",
    role: "Founder & CEO",
    image: img7,
    text: "We've worked with Raihan on several projects for Clerkbook Property Group, including brochures and flyers, as well as guestbooks and numerous cover designs for my company. He has always been creative, professional, and easy to work with. He understands the direction quickly and delivers quality work without making the process complicated. Raihan has become someone we can rely on for our design needs, and I would definitely recommend working with him.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goTo = (index) => {
    if (animating || index === current) return;

    setAnimating(true);

    setTimeout(() => {
      setCurrent(
        (index + testimonials.length) %
        testimonials.length
      );

      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const { name, role, image, text } =
    testimonials[current];

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-5xl
        rounded-2xl
        border
        border-neutral-800
        bg-black

        px-10
        py-8

        sm:px-12
        sm:py-10

        md:px-12
        md:py-12

        lg:px-16
        lg:py-14
      "
    >
      <div
        className={`
          transition-all
          duration-300
          ${animating
            ? "translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
          }
        `}
      >



        {isMobile ? (
          <div className="flex flex-col items-center">


            <img
              src={image}
              alt={name}
              className="
                h-20
                w-20
                rounded-full
                object-cover
                mb-5
              "
            />


            <p
              className="
                mb-4
                text-center
                text-sm
                leading-6
                text-gray-300
                px-1
              "
            >
              "{text}"
            </p>
            <p
              className="
                text-center
                text-sm
                font-bold
                text-white
              "
            >
              {name}
            </p>
            <p
              className="
                mt-1
                text-center
                text-xs
                text-gray-500
              "
            >
              {role}
            </p>

          </div>

        ) : (

          <div className="flex items-center gap-8 lg:gap-10">
            <div
              className="
                h-28
                w-28
                shrink-0
                overflow-hidden
                rounded-full
              "
            >
              <img
                src={image}
                alt={name}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>


            <div className="flex-1">

              <p
                className="
                  mb-4
                  text-4xl
                  font-black
                  text-white
                "
              >
                "
              </p>

              <p
                className="
                  mb-6
                  text-sm
                  leading-relaxed
                  text-gray-300
                  lg:mb-10
                  lg:text-base
                "
              >
                {text}
              </p>

              <div>
                <p
                  className="
                    text-base
                    font-bold
                    text-white
                    lg:text-lg
                  "
                >
                  {name}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                    lg:text-sm
                  "
                >
                  {role}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>


      <button
        onClick={prev}
        aria-label="Previous"
        className="
          absolute
          left-1
          top-1/2
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-700
          text-sm
          text-white
          transition
          hover:bg-white/5

          md:left-2
          md:h-11
          md:w-11
        "
      >
        &#8592;
      </button>


      <button
        onClick={next}
        aria-label="Next"
        className="
          absolute
          right-1
          top-1/2
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-gray-700
          text-sm
          text-white
          transition
          hover:bg-white/5

          md:right-2
          md:h-11
          md:w-11
        "
      >
        &#8594;
      </button>



      <div
        className="
          mt-7
          flex
          justify-center
          gap-2
        "
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-1.5
              w-1.5
              rounded-full
              transition-all
              duration-300

              ${i === current
                ? "w-5 bg-white"
                : "bg-gray-600"
              }
            `}
          />
        ))}
      </div>

    </div>
  );
}