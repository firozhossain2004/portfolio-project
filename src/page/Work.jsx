import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import data from "../Data/workimg";
import FormPage from "../components/FormPage";

const categories = [
  "Explore All",
  "Branding",
  "Poster / Flyer Design",
  "Postcards & Mailers",
  "Brochure",
  "Catalog",
  "Company Profile",
];

const ITEMS_PER_PAGE = 6;

const Work = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("Explore All");
  const [currentPage, setCurrentPage] = useState(1);

  
  
  
  const filtered =
    filter === "Explore All"
      ? data
      : data.filter(
          (item) =>
            item.category.toLowerCase() === filter.toLowerCase()
        );
  const totalPages = Math.ceil(
    filtered.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const visibleProjects = filtered.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden max-w-7xl mx-auto">

      <div className="flex justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-2xl mx-auto mb-10 leading-tight px-2">
          <span className="font-primrie">
            Designs
          </span>{" "}
          <span className="font-semibold">
            That Speak Results That
          </span>{" "}
          <span className="font-primrie">
            Matter
          </span>
        </h1>
      </div>

      <div className="flex  flex-wrap justify-center gap-7 mb-10 px-2 max-w-7xl mx-auto">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={` px-3 sm:px-4 lg:px-7 py-3 text-xs sm:text-sm border rounded-lg whitespace-nowrap transition-all duration-300 font-semibold cursor-pointer

              ${
                filter === cat
                  ? "bg-[#6650D7] text-white border-[#6650D7]"
                  : "border-[#6650D7] text-white hover:bg-[#6650D7] hover:text-white"
              }
            `}
          >
            {cat}
          </button>
        ))}

      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto
      ">

      {visibleProjects.map((item) => (
  <div
    key={item.id}
    onClick={() => navigate(`/details/${item.id}`)}
    className="
      cursor-pointer
      group
      transition
      duration-300
      active:scale-95
    "
  >
    <div
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-gray-900
      "
    >
      <img
        src={item.img}
        alt={item.title}
        className="
          w-full
          h-56
          sm:h-64
          md:h-72
          lg:h-80
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      >
        <h2
          className="
            text-white
            text-xl
            sm:text-2xl
            md:text-3xl
            font-semibold
            text-center
            px-4
          "
        >
          {item.title}
        </h2>
      </div>
    </div>
  </div>
))}
      </div>

      {totalPages > 1 && (

        <div className="
          flex
          justify-center
          items-center
          gap-2
          sm:gap-4
          mt-14
          mb-16
        ">
          <button
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
            className={`
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              text-xl
              transition

              ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:bg-white/10 cursor-pointer"
              }
            `}
          >
            ‹
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              key={page}
              onClick={() =>
                handlePageChange(page)
              }
              className={`
                w-10
                h-10
                rounded-xl
                flex
                items-center
                justify-center
                text-sm
                font-medium
                transition-all
                duration-300
                cursor-pointer

                ${
                  currentPage === page
                    ? "bg-[#6650D7] text-white shadow-lg shadow-[#6650D7]/30"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              {page}
            </button>

          ))}
          <button
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              text-xl
              transition

              ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:bg-white/10 cursor-pointer"
              }
            `}
          >
            ›
          </button>

        </div>

      )}

      <div className="mt-10 md:mt-20">
        <FormPage />
      </div>

    </div>
  );
};

export default Work;