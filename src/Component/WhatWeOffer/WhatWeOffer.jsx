import React from 'react';
import offer1 from '../../assets/images/1.jpg';
import offer2 from '../../assets/images/2.jpg';
import offer3 from '../../assets/images/3.jpg';

const WhatWeOffer = () => {
    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className="container">
                <h2 className='text-center text-[var(--orange)]'>What We Offer</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div>
                        <img src={offer1} alt="" className='' />
                        <h4 className='mt-3'>1-on-1 lessons</h4>
                        <p>Find teachers from all over the world sharing their languages, dialects, and cultures.</p>
                    </div>
                    <div>
                        <img src={offer2} alt="" />
                        <h4 className='mt-3'>Group Class</h4>
                        <p>Fun and engaging online group classes designed and led by expert teachers.</p>
                    </div>
                    <div>
                        <img src={offer3} alt="" />
                        <h4 className='mt-3'>Practice for free</h4>
                        <p>Meet and share experiences with millions of language learners from more than 190 countries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;