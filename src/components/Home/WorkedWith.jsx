import React from 'react'
import lastlogo from '../../assets/homeimg/lastLogo.png'
import Count from '../Count'

const WorkedWith = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-5xl    lg:px-24 mb-10 text-center md:text-left'>
        <span className='font-primrie text-center lg:ml-24'>Worked</span> with
      </h1>
      <div className='flex flex-col md:flex-row  justify-between items-center px-2 lg:px-72  space-y-10'>
        <div className='ml-9 md:ml-10'>
          <Count/>
        </div>
        <div className='w-full md:w-auto flex justify-center'>
          <img
            src={lastlogo}
            className='w-44  md:w-60 rounded-2xl'
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default WorkedWith