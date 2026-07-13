import React from "react";
import servicesData from "../Data/services";
import Process from "./Process";

const Servicesitem = () => {
  return (
    <div className="bg-black text-white px-5  md:py-16">


      <div className=" md:text-left max-w-3xl mx-auto md:mx-0">
        <h4 className="text-sm md:text-[16px] text-[#6650D7]">
          WHAT I DO
        </h4>

        <h1 className="text-2xl sm:text-3xl md:text-5xl mt-4 md:mt-6 ">
          <span className="font-semibold">I Design</span> <span className="font-primrie tracking-wide">Brands</span> <span className="font-semibold">That</span>{" "}
          <span className="font-primrie tracking-wide">Speak</span> <span className="font-semibold">to Audiences</span>
        </h1>
      </div>


      <div className=" mt-10 lg:mt-20 space-y-10 max-w-6xl mx-auto">

        {servicesData.map((item, index) => (
          <div
            key={index}
            className={`
        flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-28
        }
      `}
          >

            <div className="w-full lg:w-1/2 max-w-lg">
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
                {item.title}{" "}
                <span className="font-primrie text-gray-400">
                  {item.highlight}
                </span>
              </h2>

              <p className="mt-5 text-sm md:text-base text-gray-400 leading-7">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm md:text-base text-gray-400">
                {item.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#6650D7]">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>


            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="flex flex-row sm:flex-row items-center gap-3 lg:gap-8">

                <img
                  src={item.images.main}
                  alt=""
                  className="
              w-36
              sm:w-44
              md:w-48
              lg:w-52
              xl:w-56
              h-56
              sm:h-60
              md:h-64
              lg:h-72
              object-cover
              rounded-2xl
              border
              lg:mb-20
            "
                />

                <img
                  src={item.images.secondary}
                  alt=""
                  className="
              w-36
              sm:w-44
              md:w-48
              lg:w-52
              xl:w-56
              h-56
              sm:h-60
              md:h-64
              lg:h-72
              object-cover
              rounded-2xl
              border
              lg:mt-28
            "
                />
              </div>
            </div>
          </div>
        ))}

      </div>
      <Process />
    </div>
  );
};

export default Servicesitem;