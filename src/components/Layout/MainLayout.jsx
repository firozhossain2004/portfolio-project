import React from 'react'
import { Outlet } from "react-router-dom";
import Navebare from './Navebare'
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';

const MainLayout = () => {
    return (
        <>
        <div className='bg-black min-h-screen max-w-full text-white'>
            <Navebare />
            <Outlet />
            <Footer/>
            <WhatsAppButton/>
            </div>
        </>
    )
}

export default MainLayout