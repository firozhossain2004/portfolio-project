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
    <div className="relative w-4xl ml-40 ">
      <img
        src={slides[current]}
        alt=""
        className="w-full h-[550px] object-cover rounded-sm "
      />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full"
      >
        →
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${
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