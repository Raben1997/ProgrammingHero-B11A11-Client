import React from 'react';
import { Link } from 'react-router';

const TutorCard = ({ tutorial }) => {
    const { imageurl, name, language: lang, price, review, description, _id } = tutorial;
    // console.log(tutorial);
    return (
        <>
            <Link to={`/tutordetails/${_id}`}>
                <div className='sm:flex gap-3 items-center border border-[var(--blue)] p-4 md:p-8 rounded-2xl bg-[var(--blue_bg)]'>
                    <div className='flex-2/5 lg:flex-1/5'>
                        <img src={imageurl} alt="" className='rounded-2xl w-full h-full object-cover' />
                    </div>
                    <div className='pt-4 sm:pt-0 flex-3/5 lg:flex-4/5'>
                        <h4>Name : {name}</h4>
                        <span className='block mt-2 capitalize'>Language : {lang}</span>
                        <span className='block'>Price : {price}</span>
                        <span className='block'>Reviews : {review}</span>
                        <span className='block'>Description : {description}</span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default TutorCard;