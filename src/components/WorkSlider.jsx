import { useEffect, useState } from "react";

const WorkSlider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">

      <img
        src={slides[current]}
        alt={`Slide ${current + 1}`}
        className="
          w-full
          h-[250px]
          sm:h-[350px]
          md:h-[500px]
          lg:h-[550px]
          object-cover
         
          rounded-md
        "
      />
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="
          absolute
          left-6 sm:left-8 md:left-10
          top-1/2
          -translate-y-1/2
          bg-white
          text-black
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          hover:scale-110
          transition
        "
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="
          absolute
          right-6 sm:right-8 md:right-10
          top-1/2
          -translate-y-1/2
          bg-white
          text-black
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          hover:scale-110
          transition
        "
      >
        →
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${current === i
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-gray-500"
              }`}
          />
        ))}
      </div>

    </div>
  );
};

export default WorkSlider;