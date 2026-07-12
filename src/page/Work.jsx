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

const Work = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Explore All");


  const filtered =
    filter === "Explore All"
      ? data
      : data.filter(
        (d) => d.category.toLowerCase() === filter.toLowerCase()
      );

  const visibleCategories = categories;

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden max-w-5xl mx-auto">

      <div className="flex justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-2xl mx-auto mb-10 leading-tight px-2">
          <span className="font-primrie">Designs</span> <span className="font-semibold">That Speak Results That</span>{" "}
          <span className="font-primrie">Matter</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 lg:gap-3 mb-8 px-4 max-w-7xl mx-auto">

        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-2 sm:px-3 cursor-pointer lg:px-4 py-2 text-xs sm:text-sm border rounded-lg whitespace-nowrap transition font-semibold
              ${filter === cat
                ? "bg-[#6650D7] text-black border-[#6650D7]"
                : "border-[#6650D7] text-white hover:bg-[#6650D7] hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">

        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/details/${item.id}`)}
            className="cursor-pointer group transition duration-300 active:scale-95"
          >
            <div className="overflow-hidden rounded-xl border">
              <img
                src={item.img}
                alt=""
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}

      </div>
      <div className="mt-10 md:mt-20">
        <FormPage />
      </div>

    </div>
  );
};

export default Work;