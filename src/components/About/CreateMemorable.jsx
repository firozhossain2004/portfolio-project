import img1 from '../../assets/about-img/img1.png'
import img2 from '../../assets/about-img/img2.png'
import img3 from '../../assets/about-img/img3.png'
import img4 from '../../assets/about-img/img4.png'
import img5 from '../../assets/about-img/img5.png'
import img6 from '../../assets/about-img/img6.png'

const CreateMemorable = () => {
    return (
        <div>
            <div className='mt-24'>
                <div className='text-center font-medium text-2xl md:text-4xl lg:text-5xl max-w-3xl mx-auto  md:mb-20 px-4'>
                    I Create <span className='font-primrie tracking-wide'>Memorable Experiences</span>
                    for your Brand from <span className='font-primrie tracking-wide'>Bangladesh</span>
                    to the <span className='font-primrie'>World.</span>
                </div>
                <div className='px-4 '>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 items-center max-w-5xl mx-auto gap-6 mb-6 ">


                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img1}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-56 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img2}
                                alt="profile"
                                className="w-72 h-96 md:w-80 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 items-center max-w-5xl mx-auto mb-6 gap-6 ">

                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img3}
                                alt="profile"
                                className="w-72 h-96 md:w-80 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img4}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-56 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  md:gap-40 items-center max-w-5xl mx-auto mb-6">

                        <div className="flex justify-center md:justify-end md:mt-20">
                            <img
                                src={img5}
                                alt="profile"
                                className="w-72 h-96 md:w-72 md:h-56 object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <img
                                src={img6}
                                alt="profile"
                                className="w-72 h-96 md:w-80 md:h-auto object-cover rounded-2xl md:rounded-3xl"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateMemorable
  