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
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-2">

        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 md:px-4 py-2 text-xs sm:text-sm border-2 rounded-xl transition font-semibold whitespace-nowrap
              ${filter === cat
                ? "bg-blue-500 text-black border-blue-500"
                : "border-blue-500 text-white hover:bg-blue-500 hover:text-black"
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
      <div className="mt-20 md:mt-12">
        <FormPage />
      </div>

    </div>
  );
};

export default Work;