
import { motion } from "framer-motion";
import { Imgs } from "../Data/brendimg";

const LogoSlider = () => {
 
  const logos = [...Imgs, ...Imgs];
const isMobile = window.innerWidth < 768;
  return (
    <div className="overflow-hidden w-full py-10">

      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration:isMobile ? 8 : 20,
          repeat: Infinity,
        }}
      >
        {logos.map((item, index) => (
          <img
            key={index}
            src={item.img}
            className=" h-7 md:h-10 object-contain"
            alt=""
          />
        ))}
      </motion.div>

    </div>
  );
};

export default LogoSlider;