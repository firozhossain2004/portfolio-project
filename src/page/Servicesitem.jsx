import React from 'react'
import servicesData from '../js/services'
const Servicesitem = () => {
  // const service = servicesData[0];
  return (
    <div className="bg-black text-white px-28 py-20">
      <div>
        <h4 className='text-xl text-[#6650D7]'>WHAT I DO</h4>
        <h1 className='text-5xl w-2xl mb-36 mt-7'>I Design <span className='font-Englisc'>Brands</span> That <span className='font-Englisc'>Speak</span>{" "}
          to Audiences</h1>
      </div>
      {servicesData.map((item) => <div className='md:flex justify-between'>

        <div className="max-w-md space-y-10 mt-28">
          <h1 className="text-3xl">
            {item.title}{" "}
            <span className="italic text-gray-400">
              {item.highlight}
            </span>
          </h1>

          <p className="text-sm w-xs mt-4 text-gray-400">
            {item.description}
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            {item.features.map((f, i) => (
              <li key={i}><span className='text-[#6650D7] text-xl '>•</span> {f}</li>
            ))}
          </ul>

        </div>
        <div className="flex flex-row relative w-[400px] h-[500px] space-y-10">
          <img
            src={item.images.main}
            className="absolute -top-10  -left-44  w-64  h-96 object-cover rounded-2xl"
          />

          <img
            src={item.images.secondary}
            className="absolute bottom-20 right-0 w-64  h-96 object-cover rounded-2xl"
          />
        </div>
      </div>)}
     


    </div>
  );
}

export default Servicesitem