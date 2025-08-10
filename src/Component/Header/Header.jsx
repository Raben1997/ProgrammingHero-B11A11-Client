import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import MenuLinks from '../MenuLinks/MenuLinks';
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';
import { TbLogin2, TbLogout2 } from 'react-icons/tb';
import { authContextData } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';




const Header = () => {


    const { user, setUser, handleSignOut, setThemeMode, themeMode } = useContext(authContextData);

    const navigate = useNavigate();




    const handleLogout = () => {
        handleSignOut()
            .then(() => {
                setUser(null);
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong. Please try again.",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    const handleThemeMod = () => {
        setThemeMode(!themeMode)
    }


    return (
        <>
            <header className='bg-[var(--blue)] sticky top-0 z-50'>
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
                                {themeMode ? <CiLight className="text-2xl text-[var(--dark_light)]" /> : <MdNightlight className="text-xl text-[var(--dark_light)]" />}
                            </button>
                            {
                                user ? <>
                                    <button onClick={handleLogout} className='md:py-2 md:px-6 max-md:w-10 max-md:h-10 max-md:rounded-full bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer text-sm sm:text-base leading-relaxed max-md:flex max-md:justify-center max-md:items-center'><TbLogout2 className='inline-block md:mr-2 text-xl' /><span className='max-md:hidden'>Logout</span></button>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-0 shadow-none">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Tailwind CSS Navbar component"
                                                    src={user.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                            <li><a>{user.displayName}</a></li>
                                            <li onClick={handleLogout}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </> : <>
                                    <Link className='md:py-2 md:px-6 max-md:w-10 max-md:h-10 max-md:rounded-full bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer text-sm sm:text-base leading-relaxed max-md:flex max-md:justify-center max-md:items-center' to={"/login"}><TbLogin2 className='inline-block md:mr-2 text-xl' /><span className='max-md:hidden'>Login</span></Link>
                                </>
                            }
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden !p-0 bg-transparent border-0 shadow-none text-[var(--orange)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-[var(--blue)] rounded-box z-1 mt-3 w-52 p-2 shadow border border-[var(--dark_light)]">
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