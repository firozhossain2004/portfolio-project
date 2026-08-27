import React from "react";
import { Link } from "react-router-dom";
import data from "../../Data/workimg";

const portfolioIds = [3, 1, 2,13,6];

const portfolioItems = portfolioIds
  .map((id) => data.find((item) => item.id === id))
  .filter(Boolean);




const Tile = ({
  item,
  className = "",
  imgHeightClass = "h-64 sm:h-72",
}) => {
  if (!item) return null;

  return (
    <Link
      to={`/details/${item.id}`}
      className={`group relative block overflow-hidden rounded-2xl ${imgHeightClass} ${className}`}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-105"
      />
    </Link>
  );
};



const LatestPortfolio = () => {
  return (
    <section className="py-15 md:py-20 px-4 sm:px-6 lg:px-8">

     
      <div className="text-center mb-5 lg:mb-16">
        <h1 className="text-3xl md:text-5xl leading-tight">
          <span className="font-semibold">
            Latest{" "}
          </span>

          <span className="font-primrie">
            Portfolio
          </span>
        </h1>
      </div>


      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

      
        <Tile
          item={portfolioItems[0]}
          className="lg:col-span-2"
          imgHeightClass="h-64 sm:h-72 lg:h-[370px]"
        />


        <Tile
          item={portfolioItems[1]}
          className="lg:col-span-2 lg:mt-14"
          imgHeightClass="h-64 sm:h-72 lg:h-[310px]"
        />


        
        <div className="sm:col-span-2 lg:col-span-4 flex justify-center">
          <Tile
            item={portfolioItems[2]}
            className="w-full lg:w-[65%]"
            imgHeightClass="h-64 sm:h-80 lg:h-[400px]"
          />
        </div>


        <Tile
          item={portfolioItems[3]}
          className="lg:col-span-2"
          imgHeightClass="h-64 sm:h-72 lg:h-[310px]"
        />


        {/* Project 5 */}
        <Tile
          item={portfolioItems[4]}
          className="lg:col-span-2"
          imgHeightClass="h-64 sm:h-72 lg:h-[370px]"
        />

      </div>


      {/* See All Projects */}
      <div className="flex justify-center mt-12">
        <Link
          to="/work"
          className="bg-[#6650D7] hover:bg-[#543ec7] transition px-6 py-3 rounded-xl font-medium text-white cursor-pointer"
        >
          See All Projects
        </Link>
      </div>

    </section>
  );
};

export default LatestPortfolio;