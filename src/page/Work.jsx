import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import data from "../Data/workimg";
import FormPage from "../components/FormPage";

const categories = [
  "All",
  "Branding",
  "Flyer",
  "Postcard",
  "Brochure",
  "Catalog",
  "Profile",
];

const Work = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === "All"
      ? data
      : data.filter(
          (d) => d.category.toLowerCase() === filter.toLowerCase()
        );

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-10">

     
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center max-w-xl mb-10 leading-tight">
          <span className="font-Englisc">Designs</span> That Speak Results That{" "}
          <span className="font-Englisc">Matter</span>
        </h1>
      </div>

      
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">

        {visibleCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full border transition
              ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "border-gray-500 text-white hover:bg-white hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}

      
        {categories.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm border rounded-full border-gray-500 hover:bg-gray-200 hover:text-black transition"
          >
            {showAll ? "Less" : "More"}
          </button>
        )}

      </div>

      {/* 🔥 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 md:max-w-6xl mx-auto">

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

    
    
      <div className="mt-20 md:mt-32">
        <FormPage />
      </div>

    </div>
  );
};

export default Work;