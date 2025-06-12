import React from 'react';
// import React, { useContext } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
// import { authContext } from '../Provider/AuthProvider';
import Banner from '../Component/Banner/Banner';
import Counter from '../Component/Counter/Counter';
import TotalLanguages from '../Component/TotalLanguages/TotalLanguages';

const Home = () => {
    // const a = useContext(authContext);
    // console.log(a);
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Counter></Counter>
            <TotalLanguages></TotalLanguages>
            <Footer></Footer>
        </>
    );
};

export default Home;