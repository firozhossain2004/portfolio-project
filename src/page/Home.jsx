import React from 'react'

import Hero from '../components/Home/Hero'
import LogoSlider from '../components/LogoSlider'
import WorkedWith from '../components/Home/WorkedWith'
import LatestPortfolio from '../components/Home/LatestPortfolio'
import Clients from '../components/Home/Clients'
import Container from '../components/Container'


const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
      <LogoSlider />
      <WorkedWith />
      <LatestPortfolio />
      <Clients />
      </Container>
    </div>
  )
}

export default Home