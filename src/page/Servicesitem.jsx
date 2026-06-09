import React from "react";
import servicesData from "../Data/services";
import Process from "./Process";

const Servicesitem = () => {
  return (
    <div className="bg-black text-white px-4 md:px-24 py-16">


      <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
        <h4 className="text-sm md:text-lg text-[#6650D7]">
          WHAT I DO
        </h4>

        <h1 className="text-2xl sm:text-3xl md:text-5xl mt-4 md:mt-6 leading-tight">
          I Design <span className="font-luxury italic tracking-wide">Brands</span> That{" "}
          <span className="font-luxury italic tracking-wide">Speak</span> to Audiences
        </h1>
      </div>


      <div className="mt-12 space-y-16 md:space-y-24">

        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-36"
          >


            <div className="max-w-md space-y-6 text-center md:text-left">
              <h2 className="text-xl md:text-3xl">
                {item.title}{" "}
                <span className="italic text-gray-400">
                  {item.highlight}
                </span>
              </h2>

              <p className="text-sm md:text-base text-gray-400">
                {item.description}
              </p>

              <ul className="space-y-2 text-sm md:text-base">
                {item.features.map((f, i) => (
                  <li key={i}>
                    <span className="text-[#6650D7] text-lg">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full max-w-sm  md:ml-40 h-[400px] md:h-[500px]">

              <img
                src={item.images.main}
                alt=""
                className="absolute top-0 md:-ml-44 w-40 sm:w-48 md:w-64 h-60 md:h-80 object-cover rounded-xl border"
              />

              <img
                src={item.images.secondary}
                alt=""
                className="absolute bottom-0 right-0 w-40 sm:w-48 md:w-64 h-60 md:h-80 object-cover rounded-xl border"
              />

            </div>

          </div>
        ))}

      </div>
      <Process />
    </div>
  );
};

export default Servicesitem;