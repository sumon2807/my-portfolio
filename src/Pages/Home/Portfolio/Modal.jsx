import React from 'react';
import portfolios from '../../../assets/Data/portfolioData';

const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)

    return (
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-slate-900 bg-opacity-40'>
            <div className=' max-w-xl absolute top-1/2 left-1/2 z-20 bg-white rounded-lg transform -translate-x-1/2 -translate-y-1/2'>
                <div>
                    <figure>
                        <img className=' rounded-lg' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>

                <div>
                    <h2 className='text-2xl text-slate-900 font-bold my-5 px-4'>{portfolio.title}</h2>

                    <div className='mt-5 flex items-center gap-3 flex-wrap pb-4'>
                        <h4 className=' text-slate-800 text-base font-bold px-4'>Technologies:</h4>
                        {
                            portfolio.technologies.map((item, index) => (
                                <span key={index} className='bg-gray-200 py-1 px-2 rounded-md text-sm leading-0'>
                                    {item}
                                </span>))}
                    </div>

                    <div className='px-4'>
                        <a href="#">
                            <button className=' bg-slate-900 text-white py-2 px-4 my-4 rounded-lg font-medium hover:bg-accent ease-in duration-300'>Live site</button>
                        </a>
                    </div>
                </div>
                <button onClick={()=>setShowModal(false)} className=' w-7 h-7 bg-white absolute top-7 right-7 text-2xl flex items-center justify-center rounded leading-0 cursor-pointer'>&times;</button>
            </div>
        </div>
    );
};

export default Modal;