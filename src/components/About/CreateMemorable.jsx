import img1 from '../../assets/about-img/img1.png'
import img2 from '../../assets/about-img/img2.png'
import img3 from '../../assets/about-img/img3.png'
import img4 from '../../assets/about-img/img4.png'
import img5 from '../../assets/about-img/img5.png'
import img6 from '../../assets/about-img/img6.png'

const CreateMemorable = () => {
    return (
        <div>
            <div>

                {/* Heading */}
                <div className='text-center font-medium text-2xl md:text-4xl lg:text-5xl max-w-3xl mx-auto mb-12 md:mb-20 px-4'>
                    I Create <span className='font-Englisc'>Memorable Experiences</span>
                    for your Brand from <span className='font-Englisc'>Bangladesh</span>
                    to the <span className='font-Englisc'>World.</span>
                </div>


                <div className='px-4 '>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto mb-16 md:mb-24">

                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img1}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-96 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>

                        {/* Big Image */}
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img2}
                                alt="profile"
                                className="w-72 h-96 md:w-96 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>


                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto mb-16 md:mb-24">

                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img3}
                                alt="profile"
                                className="w-72 h-96 md:w-96 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img4}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-96 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>


                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">

                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img5}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-96 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img6}
                                alt="profile"
                                className="w-72 h-96 md:w-96 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateMemorable