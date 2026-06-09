import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import MainLayout from './components/Layout/MainLayout'
import ContactPage from './page/ContactPage'
import AboutPag from './page/AboutPag'
import Work from './page/Work'
import Details from './page/Details'
import Servicesitem from './page/Servicesitem'
import Process from './page/Process'
const App = () => {
  return (
    
      <Routes>
        <Route path='/'element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPag/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path="/details/:id" element={<Details/>} />
        <Route path='/services' element={<Servicesitem/>}/>
        
        </Route>
      </Routes>
    
  )
}

export default App