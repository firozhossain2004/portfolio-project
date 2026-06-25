
import { useState } from "react";

const WorkSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  if (!slides?.length) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto ">
      <img
        src={slides[current]}
        alt=""
        className="
          w-full
          md:w-6xl
          h-[250px]
          sm:h-[350px]
          md:h-[500px]
          lg:h-[650px]
          object-cover
          rounded-md
        "
      />

     
      <button
        onClick={prev}
        className="
          absolute
          left-2 md:left-4
          top-1/2
          -translate-y-1/2
          bg-white
          text-black
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          shadow-lg
        "
      >
        ←
      </button>
      <button
        onClick={next}
        className="
          absolute
          right-2 md:right-4
          top-1/2
          -translate-y-1/2
          bg-white
          text-black
          w-9 h-9
          md:w-12 md:h-12
          rounded-full
          shadow-lg
        "
      >
        →
      </button>

     
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              current === i
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

