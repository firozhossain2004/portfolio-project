import React from 'react'

import Hero from '../components/Home/Hero'
import LogoSlider from '../components/LogoSlider'
import WorkedWith from '../components/Home/WorkedWith'
import LatestPortfolio from '../components/Home/LatestPortfolio'
import Clients from '../components/Home/Clients'

const Home = () => {
  return (
    <div>
      <Hero />
       <div className='flex flex-wrap justify-center items-center gap-6 mb-10'>
        <LogoSlider />
      </div>
       <WorkedWith/>
       <LatestPortfolio/>
       <Clients/> 
    </div>
  )
}

export default Home