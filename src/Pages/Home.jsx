import React from 'react';
// import React, { useContext } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
// import { authContext } from '../Provider/AuthProvider';
import Banner from '../Component/Banner/Banner';

const Home = () => {
    // const a = useContext(authContext);
    // console.log(a);
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </>
    );
};

export default Home;