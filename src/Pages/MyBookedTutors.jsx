import React, { useContext, useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { authContextData } from '../Provider/AuthProvider';
import TutorCard from '../TutorCard/TutorCard';
import Loading from '../Component/Loading/Loading';

const MyBookedTutors = () => {

    const { user, dataloading, setDataLoading } = useContext(authContextData);
    const [books, setBooks] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (user?.email) {
            fetch(`https://tutor-booking-server-five.vercel.app/mytutorials?bookedBy=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setBooks(data);
                    setDataLoading(false);
                });
        }
    }, [user?.email]);


    // console.log(books);

    return (
        <>
            <Header></Header>
            <div className='sec-gap bg-[var(--orange_bg)]'>
                <div className="container">
                    <h2 class="text-[var(--orange)]">My Booked Tutor</h2>
                    <div className='grid gap-5'>
                        {
                            dataloading ? (
                                <Loading />
                            ) : books.length > 0 ? (
                                books.map(tutorial => (
                                    <TutorCard key={tutorial._id} tutorial={tutorial} />
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <p className="text-[var(--orange)] text-lg">You haven’t booked any tutors yet.</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyBookedTutors;