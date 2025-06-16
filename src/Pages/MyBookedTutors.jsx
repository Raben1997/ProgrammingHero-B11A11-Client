import React, { useContext, useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { authContextData } from '../Provider/AuthProvider';
import TutorCard from '../TutorCard/TutorCard';

const MyBookedTutors = () => {

    const { user } = useContext(authContextData);
    const [books, setBooks] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (user?.email) {
            fetch(`http://localhost:3000/mytutorials?bookedBy=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setBooks(data);
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
                            books.map(tutorial => <TutorCard key={tutorial._id} tutorial={tutorial}></TutorCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyBookedTutors;