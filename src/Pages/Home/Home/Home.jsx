import React, { useState } from 'react';
import { FaBars, FaEllipsisV, FaRegWindowClose } from 'react-icons/fa';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../../Sheard/Footer';
import Navbar from '../../Sheard/Navbar';

const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className=" absolute top-0 left-0 btn btn-ghost drawer-button lg:hidden"><FaEllipsisV /></label>
                <Navbar></Navbar>
                <Banner></Banner>
                <Services></Services>
                <Portfolio></Portfolio>
                <Footer></Footer>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="lg:w-72 w-80  bg-gray-900 min-h-full" >
                    <div className="avatar online flex flex-col justify-center items-center bg-gray-800 lg:pt-4 pt-4">
                        <div className="w-32 rounded-full border-2 ">
                            <img src="../../../public/assets/images/about/pro-removebg-preview.png" />
                        </div>
                        <div className='text-center pt-4'>
                            <h1 className='font-bold'>Shariful Islam</h1>
                            <span>Front-End Developer</span>
                            <p>UX/UI Designer</p>
                        </div>
                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden absolute top-0 right-0"><FaEllipsisV /></label>

                    </div>
                    <div className='flex justify-between items-center border-b p-4'>
                        <div className='flex flex-col  '>
                            <span>Residence:</span>
                            <span>City:</span>
                            <span>Age:</span>
                        </div>
                        <div className='flex flex-col  '>
                            <h1>Bangladesh</h1>
                            <span>Dhaka</span>
                            <p>37</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h2>Language</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;