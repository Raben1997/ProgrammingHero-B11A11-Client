import React from 'react';
import { Link } from 'react-router';

const TutorCard = ({ tutorial  }) => {
    const { imageurl, name, language: lang, price, description, _id } = tutorial;
    return (
        <>
            <Link to={`/tutordetails/${_id}`}>
                <div className='rounded-2xl bg-[var(--blue_bg)] shadow-2xl' data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <img src={imageurl} alt="" className='rounded-t-2xl w-full object-cover h-[200px]' />
                    </div>
                    <div className='p-2 md:p-4'>
                        <h4>Name : {name}</h4>
                        <span className='block mt-2 capitalize'>Language : {lang}</span>
                        <span className='block'>Price : {price}</span>
                        <span className='block min-h-[48px]'>Description : {description}</span>
                        <button className='btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full'>Show Details</button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default TutorCard;