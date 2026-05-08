import React from 'react'
import lastlogo from '../../assets/homeimg/lastLogo.png'
import Count from '../Count'

const WorkedWith = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-5xl font-bold italic px-2 md:px-28 mb-10 text-center md:text-left'>
        <span className='font-Englisc'>Worked</span> with
      </h1>
      <div className='flex flex-col md:flex-row gap-10 justify-between items-center px-4 md:px-56 mb-10'>
        <Count/>
        <div className='w-full md:w-auto flex justify-center'>
          <img
            src={lastlogo}
            className='w-56 md:w-xs rounded-2xl'
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default WorkedWith