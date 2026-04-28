import React from 'react'

import { Imgs } from '../js/brendimg.js'
import Titale from '../components/Titale.jsx'
import FromPage from '../components/FromPage.jsx'
const ContactPage = () => {
    return (
        <div className="bg-black min-h-screen text-white p-10 space-y-20 ">

            <h1 className="text-6xl text-center mb-10 ">
                Have a Question or <br />
                <span className="italic font-Englisc">Just Want to Chat?</span>
            </h1>

            <FromPage/>
            <div className='flex mb-10'>
                {Imgs.map((item) => (
                    <img
                        key={item.id}
                        src={item.img}
                        className="h-8 mx-9 my-10 object-contain"
                        alt=""
                    />
                ))}
            </div>
            <div className='text-center  space-y-2.5'>
                <h5 className='text-xl text-purple-500'>FREQUENTLY ASKED QUESTIONS</h5>
                <h1 className='text-5xl'>Your Questions <br />
                    <span className='font-Englisc'>Answered!</span></h1>
            </div>
            <div>
                <Titale/>
            </div>
        </div>
    )
}

export default ContactPage