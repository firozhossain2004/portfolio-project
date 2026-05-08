import React from 'react'
import { Outlet } from "react-router-dom";
import Navebare from './Navebare'
import Footer from './Footer';
const MainLayout = () => {
    return (
        <>
        <div className='bg-black min-h-screen max-w-full text-white'>
            <Navebare />
            <Outlet />
            <Footer/>
            </div>
        </>
    )
}

export default MainLayout