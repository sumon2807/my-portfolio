import React, { useEffect, useState } from 'react';
import data from '../../../assets/Data/portfolioData'
import Modal from './Modal';

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTab, setSelectTab]= useState('all')
    const [showModal, setShowModal]= useState(false)
    const [activeID, setActiveID]=useState(null)


    const loadMoreHandler = () => {
        console.log(data);
        setNextItems(prev => prev + 3);
    };

    const showModalHandeler=id=>{
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(()=>{

        if(selectTab=== 'all'){
            setPortfolios(data)
        }

        if(selectTab=== 'web-design'){
            const filteredData=data.filter(item=> item.category==='web-design')
            setPortfolios(filteredData)
        }
        if(selectTab=== 'ux-design'){
            const filteredData=data.filter(item=> item.category==='Ux')
            setPortfolios(filteredData)
        }
    },[selectTab])

    return (
        <section>
            <div className='flex items-center justify-around flex-wrap'>
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-[2.4rem] font-bold text-accent' style={{ fontFamily: 'Kaushan Script' }}>My Recent Projects</h3>
                </div>

                <div className='flex gap-3'>
                    <button onClick={()=>setSelectTab('all')} className='btn text-white btn-sm border border-solid rounded-lg py-2 px-4'>All</button>
                    <button onClick={()=>setSelectTab('web-design')} className='btn btn-sm text-white border border-solid rounded-lg py-2 px-4'>Web Design</button>
                    <button onClick={()=>setSelectTab('ux-design')} className='btn btn-sm text-white border border-solid rounded-lg py-2 px-4'>UX Design</button>
                </div>
            </div>

            <div className='flex items-center gap-4 flex-wrap mt-12'>
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div
                            key={index}
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                            <figure>
                                <img className=' rounded-lg' src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className='w-full h-full bg-accent bg-opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <button onClick={()=>showModalHandeler(portfolio.id)} className='text-white bg-slate-800 hover:bg-accent py-2 px-4 rounded-lg font-medium ease-in duration-200'>See Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='text-center mt-6'>
                {
                    nextItems < portfolios.length && data.length > 6 && (
                    <button onClick={loadMoreHandler} className='text-white bg-slate-800 hover:bg-accent py-2 px-4 rounded-lg font-medium ease-in duration-200'>Load More</button>
                )}


            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    );
};

export default Portfolio;