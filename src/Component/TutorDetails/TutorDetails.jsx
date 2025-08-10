import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { authContextData } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const TutorDetails = () => {


    const tutorDetails = useLoaderData();
    const { user } = useContext(authContextData);
    const [reviewCount, setReviewCount] = useState(tutorDetails.review);
    const navigate = useNavigate();


    // console.log(tutorDetails.bookedBy !== user.email);


    const handleReviewCount = () => {
        fetch(`http://localhost:3000/tutorial/review/${tutorDetails._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ review: reviewCount + 1 })
        })
            .then(res => res.json())
            .then(() => {
                setReviewCount(reviewCount + 1);
            })
    }

    const handleBook = (tutorialId, email) => {
        fetch(`http://localhost:3000/tutorials/${tutorialId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bookStatus: true, bookedBy: email })
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Booking Successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/mybookedtutors");
            });
    };



    return (
        <>
            <Header></Header>
            <div className='sec-gap'>
                <div className="container">
                    <div className='max-w-[600px] mx-auto border border-[var(--orange)] p-4 md:p-8 rounded-2xl'>
                        <img src={tutorDetails.imageurl} className='w-full mb-5' alt="" />
                        <h3>{tutorDetails.name}</h3>
                        <span className='block'>Email : {tutorDetails.email}</span>
                        <span className='block'>Language : {tutorDetails.language}</span>
                        <span className='block'>Price : {tutorDetails.price}</span>
                        <span className='block'>Review : {reviewCount}
                            {
                                user.email !== tutorDetails.email && <button onClick={handleReviewCount} className='py-2 px-6 bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer text-sm sm:text-base leading-relaxed ml-3'>Review</button>
                            }
                        </span>
                        <span className='block'>Description : {tutorDetails.description}</span>
                        {
                            user.email !== tutorDetails.email &&
                            !tutorDetails.bookedBy?.includes(user.email) && (
                                <button
                                    onClick={() => handleBook(tutorDetails._id, user.email)}
                                    className='py-2 px-6 bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer text-sm sm:text-base leading-relaxed mt-3'>
                                    Book Tutor
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default TutorDetails;