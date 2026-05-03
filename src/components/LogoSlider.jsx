
import { motion } from "framer-motion";
import { Imgs } from "../js/brendimg";

const LogoSlider = () => {
  // 👉 double list for seamless loop
  const logos = [...Imgs, ...Imgs];

  return (
    <div className="overflow-hidden w-full py-10">

      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20, // speed control
          repeat: Infinity,
        }}
      >
        {logos.map((item, index) => (
          <img
            key={index}
            src={item.img}
            className="h-10 object-contain"
            alt=""
          />
        ))}
      </motion.div>

    </div>
  );
};

export default LogoSlider;