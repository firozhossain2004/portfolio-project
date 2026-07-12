import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Imgs } from "../Data/brendimg";

const LogoSlider = () => {
  const logos = [...Imgs, ...Imgs];

  const sliderRef = useRef(null);
  const x = useMotionValue(0);
  const widthRef = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Recalculate the loop width once the DOM is ready, whenever an image
  // finishes loading, and whenever the container resizes. Measuring only
  // once on mount (as before) captures the width before <img> tags have
  // loaded, so the real width ends up bigger than what was recorded,
  // causing the marquee to visibly jump when it loops.
  useEffect(() => {
    if (!sliderRef.current) return;

    const measure = () => {
      widthRef.current = sliderRef.current.scrollWidth / 2;
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(sliderRef.current);

    return () => resizeObserver.disconnect();
  }, [imagesLoaded]);

  useAnimationFrame(() => {
    if (!widthRef.current) return;

    const speed = window.innerWidth < 768 ? 1 : 0.7;

    let next = x.get() - speed;

    if (-next >= widthRef.current) {
      next = 0;
    }

    x.set(next);
  });

  return (
    <div className="overflow-hidden w-full py-10 md:mb-20">
      <motion.div
        ref={sliderRef}
        style={{ x }}
        className="flex w-max items-center"
      >
        {logos.map((item, index) => (
          <div key={index} className="shrink-0 mr-16">
            <img
              src={item.img}
              alt={item.name || ""}
              onLoad={() => setImagesLoaded((n) => n + 1)}
              className="h-7 md:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
