import React from 'react'
import lastlogo from '../../assets/homeimg/lastLogo.png'
import Count from '../Count'

const WorkedWith = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-5xl mt-8  mb-10 text-center md:text-left'>
        <span className='font-primrie text-center '>Worked</span> with
      </h1>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 gap-5 md:gap-20 space-y-10'>
        <div className=''>
          <Count/>
        </div>
        <div className='max-w-64  w-full flex justify-center'>
          <img
            src={lastlogo}
            className='rounded-xl'
            alt="lastlogo"
          />
        </div>
      </div>
    </div>
  )
}

export default WorkedWith