import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../Data/workimg";
import { AnimatePresence, motion } from 'framer-motion'
const Details = () => {
    const { id } = useParams();
    const [isVisible, setIsVisible] = useState(false)
    const item = data.find(d => d.id.toString() === id);

    if (!item) {
        return <div className="text-white">Not Found</div>;
    }

    return (
        <div className="bg-black  text-white min-h-screen">


            <div className="opacity-55 w-full h-[60vh] md:h-screen  bg-cover object-cover bg-no-repeat rounded-2xl overflow-hidden " style={{ backgroundImage: `url(${item.img})` }}>
                <h1 className="text-4xl text-black">Hello</h1>
            </div>

            <div className="bg-black  px-64 py-16">


                <div className="grid grid-cols-2 gap-6   mb-6">
                    <img src={item.caktagoreimg2} className="w-full h-64  object-cover rounded-xl" />
                    <img src={item.caktagoreimg3} className="w-full h-64 object-cover rounded-xl" />
                </div>

                <AnimatePresence mode="wait">
                    {isVisible && (
                        <motion.div
                            key="content"
                            className="mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src={item.caktagoreimg5}
                                className="w-5xl h-96 object-cover rounded-xl"
                            />
                            <img
                                src={item.caktagoreimg5}
                                className="w-5xl h-96 object-cover rounded-xl"
                            />
                            <img
                                src={item.caktagoreimg5}
                                className="w-5xl h-96 object-cover rounded-xl"
                            />
                            <img
                                src={item.caktagoreimg5}
                                className="w-5xl h-96 object-cover rounded-xl"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <button onClick={() => setIsVisible(!isVisible)}>
                    Toggle
                </button>


                <div className="grid grid-cols-2 gap-6">
                    <img src={item.caktagoreimg2} className="w-full h-64 object-cover rounded-xl" />
                    <img src={item.caktagoreimg3} className="w-full h-64 object-cover rounded-xl" />
                </div>

            </div>


        </div>
    );
};

export default Details;