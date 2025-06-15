import React from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import Banner from '../Component/Banner/Banner';
import Counter from '../Component/Counter/Counter';
import TotalLanguages from '../Component/TotalLanguages/TotalLanguages';
import WhatWeOffer from '../Component/WhatWeOffer/WhatWeOffer';
import Faq from '../Component/Faq/Faq';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Counter></Counter>
            <TotalLanguages></TotalLanguages>
            <WhatWeOffer></WhatWeOffer>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
};

export default Home;