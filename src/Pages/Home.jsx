import React, { useContext } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { authContext } from '../Provider/AuthProvider';
import Hero from '../Component/Hero/Hero';

const Home = () => {
    const a = useContext(authContext);
    console.log(a);
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Footer></Footer>
        </>
    );
};

export default Home;