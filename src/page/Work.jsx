import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import data from '../js/workimg';
import FromPage from '../components/FromPage';
import From from '../components/From';

const Work = () => {
  

  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const filtered =
  filter === "All"
    ? data
    : data.filter(d => d.category.toLowerCase() === filter.toLowerCase());
  return (
    <div className="min-h-screen bg-black text-white px-4 py-5 ">

      <div className=' flex justify-center'>
        <h1 className=" md:text-6xl text-center w-xl mb-20">
          <span className='font-Englisc'>Designs</span> That Speak Results That <span className='font-Englisc'>matter</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-5">
        {["All", "Branding", "Flyer", "Postcard", "Brochure", "Catalog", "Profile",].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="px-3 py-1 text-xs md:text-sm border rounded-full hover:bg-white hover:text-black transition"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 px-28">
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => navigate(`/details/${item.id}`)}
            className="cursor-pointer transition duration-300 active:scale-95 md:hover:scale-95"
          >
            <img
              src={item.img}
              className="w-xl h-96 rounded-xl md:rounded-2xl border"
            />

          </div>
        ))}
      </div>
      <div className='mt-32 mb-20'>
        <FromPage />
      </div>
    </div>
  );
}

export default Work