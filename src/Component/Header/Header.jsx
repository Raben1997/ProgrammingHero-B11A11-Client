import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import MenuLinks from '../MenuLinks/MenuLinks';
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';




const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const handleThemeMod = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkMode]);


    return (
        <>
            <header className='bg-[var(--blue)]'>
                <div className="container">
                    <div className="navbar !p-0">
                        <div className="navbar-start">
                            <h2 className='!p-0 text-[var(--orange)]'><Link to={"/"}>Tutor<span className='text-[var(--dark_light)]'>Booking</span></Link></h2>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <div className="menu menu-horizontal px-1">
                                <MenuLinks isFooter={false}></MenuLinks>
                            </div>
                        </div>
                        <div className="navbar-end flex gap-2">
                            <button onClick={handleThemeMod} className="bg-[var(--orange)] w-10 h-10 rounded-full border-0 shadow-none flex justify-center items-center cursor-pointer">
                                {darkMode ? <CiLight className="text-2xl text-[var(--dark_light)]" /> : <MdNightlight  className="text-xl text-[var(--dark_light)]" />}
                            </button>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-0 shadow-none">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <MenuLinks isFooter={false}></MenuLinks>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;