import React, { useState } from 'react';
import { FaCodiepie, FaRegWindowClose, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Service", link: "/" },
        { name: "Blogs", link: "/" },
        { name: "Contact", link: "/" },
    ]
    return (
        <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}

                <label htmlFor="my-drawer-4">
                    <div onClick={() => setOpen(!open)} id='manu-icon' className={`absolute lg:right-4 right-4 lg:top-6 top-3 `}>
                        {open === true ?
                            <FaRegWindowClose />
                            :
                            <FaBars />
                        }
                    </div></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu lg:pt-16 pt-12 w-52 min-h-full bg-gray-800">
                    {/* Sidebar content here */}
                    {
                        Links.map((link) => (
                            <li key={link.name} className=''>
                                <a href={link.link} className='hover duration-500 hover:bg-white'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

{/* <div className='z-[10] bg-red-400 '>
            <div onClick={() => setOpen(!open)} id='manu-icon' className={`absolute right-10 top-6 cursor-pointer max-w-screen-xl`}>
                {open === true ?
                    <FaRegWindowClose />
                    :
                    <FaBars />
                }
            </div>
                <ul className={` absolute transition-all duration-500 ease-in text-white ${open ? 'right-10' : '-right-32'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className=''>
                                <a href={link.link} className='hover duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
        </div> */}