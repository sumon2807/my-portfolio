import React from 'react';
import icon1 from '../../../assets/images/icons/2721264.png'
import icon2 from '../../../assets/images/icons/ux-design.png'
import icon3 from '../../../assets/images/icons/freelancer.png'
import icon4 from '../../../assets/images/icons/web-settings.png'


const Services = () => {
    return (
        <section>
            <div className='text-center'>
                <h2 className='text-accent font-bold text-[2.4rem] mb-5 mt-10' style={{ fontFamily: 'Kaushan Script'}}>What do I help</h2>
                <p className='lg:max-w-xl lg:mx-auto font-medium text-base leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae doloribus adipisci exercitationem. Recusandae, dolores repellendus, a ullam quasi ratione at possimus nobis amet debitis architecto odit eligendi. Perferendis, laboriosam dolores?</p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                        {/* =======vertical line====== */}
                        <div className=' hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>

                        {/* =========left card======= */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow-lg group hover:bg-accent cursor-pointer ease-in duration-150'>
                                        <h3 className='text-gray-400 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl '>Frontend Developer</h3>
                                        <p className=' text-base group-hover:text-white group-hover:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil error quia harum nobis ex ad, alias enim rem iure illum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' rounded-full border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={icon1} alt="" />
                                </figure>
                            </div>

                            </div>
                        </div>

                        {/* =======right card========== */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow-lg group hover:bg-accent cursor-pointer ease-in duration-150'>
                                        <h3 className='text-gray-400 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl '>UI-UX Designer</h3>
                                        <p className=' text-base group-hover:text-white group-hover:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil error quia harum nobis ex ad, alias enim rem iure illum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' rounded-full border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={icon2} alt="" />
                                </figure>
                            </div>

                            </div>
                        </div>

                        {/* =========left card======= */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow-lg group hover:bg-accent cursor-pointer ease-in duration-150'>
                                        <h3 className='text-gray-400 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl '>Apps Developer</h3>
                                        <p className=' text-base group-hover:text-white group-hover:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil error quia harum nobis ex ad, alias enim rem iure illum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' rounded-full border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={icon3} alt="" />
                                </figure>
                            </div>

                            </div>
                        </div>

                        {/* =======right card========== */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow-lg group hover:bg-accent cursor-pointer ease-in duration-150'>
                                        <h3 className='text-gray-400 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl '>Backend Developer</h3>
                                        <p className=' text-base group-hover:text-white group-hover:font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil error quia harum nobis ex ad, alias enim rem iure illum!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' rounded-full border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={icon4} alt="" />
                                </figure>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;