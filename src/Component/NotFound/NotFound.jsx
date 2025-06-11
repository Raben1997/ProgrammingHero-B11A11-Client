import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';
import notfound from '../../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <>
            <Header></Header>
            <div className='sec-gap text-center bg-[var(--dark_light)]'>
                <img className='max-w-[600px] mx-auto block pb-4 md:pb-5 lg:pb-6' src={notfound} alt="" />
                <Link className='py-4 px-6 bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer hover:bg-[var(--blue)] text-sm sm:text-base leading-relaxed' to={"/"}>Back To Home</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;