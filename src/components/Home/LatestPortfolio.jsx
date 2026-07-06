import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../../Data/workimg";

const LatestPortfolio = () => {
  const navigate = useNavigate();

  const portfolioItems = data.slice(0, 5);

  return (
    <div>
      <div className="py-12 md:py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl">
          <span className="font-semibold">Latest</span>{" "}
          <span className="font-primrie">Portfolio</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 ">
          {portfolioItems[0] && (
            <div
              onClick={() =>
                navigate(`/details/${portfolioItems[0].id}`)
              }
              className="w-full lg:w-[38%] h-72 lg:h-80 rounded-2xl overflow-hidden mx-auto relative group cursor-pointer"
            >
              <img
                src={portfolioItems[0].img}
                alt={portfolioItems[0].title}
                className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          )}

          {portfolioItems[1] && (
            <div
              onClick={() =>
                navigate(`/details/${portfolioItems[1].id}`)
              }
              className="w-full lg:w-[38%] h-72 lg:h-72 lg:mt-12  overflow-hidden  rounded-2xl relative group  mx-auto object-contain cursor-pointer"
            >
              <img
                src={portfolioItems[1].img}
                alt={portfolioItems[1].title}
                className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          )}
        </div>

       
        {portfolioItems[2] && (
          <div
            onClick={() =>
              navigate(`/details/${portfolioItems[2].id}`)
            }
            className="w-full lg:w-[60%] h-72 lg:h-[400px] mx-auto rounded-2xl overflow-hidden  relative group   object-contain cursor-pointer mt-7 mb-7"
          >
            <img
              src={portfolioItems[2].img}
              alt={portfolioItems[2].title}
              className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        )}

     
        <div className="flex flex-col md:flex-row gap-7  md:gap-40 ">
          {portfolioItems[3] && (
            <div
              onClick={() =>
                navigate(`/details/${portfolioItems[3].id}`)
              }
              className="w-full lg:w-[38%] h-72 lg:h-72 rounded-2xl overflow-hidden relative group 
              cursor-pointer mx-auto object-contain"
            >
              <img
                src={portfolioItems[3].img}
                alt={portfolioItems[3].title}
                className="w-full h-full object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          )}

          {portfolioItems[4] && (
            <div
              onClick={() =>
                navigate(`/details/${portfolioItems[4].id}`)
              }
              className="w-full lg:w-[38%] h-72 lg:h-80 rounded-xl overflow-hidden relative group cursor-pointer mx-auto object-contain"
            >
              <img
                src={portfolioItems[4].img}
                alt={portfolioItems[4].title}
                className="w-full h-full object-cover  transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-7">
          <Link
            to="/work"
            className="bg-[#6650D7] px-6 py-2 rounded-xl"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestPortfolio;

