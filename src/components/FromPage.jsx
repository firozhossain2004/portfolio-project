import React from 'react'
import From from '../components/From'
const FromPage = () => {
  return (
    <div className="md:flex gap-10 max-w-5xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-md">

                <div className='w-2xl space-y-15'>
                    <h1 className='text-4xl'>
                        Tell Me Your Amazing <br />
                        <span className='font-Englisc'>Project Here</span>
                    </h1>
                    <p className='w-xs text-xs text-gray-400'>
                        Expect a response from us within 24 hours
                        We’re happy to sign an NDA upon request. <br />
                        Get access to a team of dedicated
                        product specialists.
                    </p>
                    <div className='space-y-6'>
                        <div>
                            <h3>My Email</h3>
                            <p className='text-sm text-gray-400'>b4raihan@gmail.com</p>
                        </div>
                        <div>
                            <h3>My Whatsapp Number</h3>
                            <p className='text-sm text-gray-400'>+880 164 662 6226</p>
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p className='text-sm text-gray-400'>Satkhira, Khulna, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <From />


            </div>
  )
}

export default FromPage