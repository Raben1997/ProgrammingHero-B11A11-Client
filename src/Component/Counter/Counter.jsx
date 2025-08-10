import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Counter = () => {

    const [tutors, setTutors] = useState(0);
    const [reviews, setReviews] = useState(0);
    const [totalLanguages, setTotalLanguages] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("https://tutor-booking-server-five.vercel.app/mytutorialshome?role=tutor", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {

                const tutorData = data.filter(item => item.role === "tutor");
                const uniqueEmailMap = new Map();
                tutorData.forEach(item => {
                    if (!uniqueEmailMap.has(item.email)) {
                        uniqueEmailMap.set(item.email, item);
                    }
                });
                const uniqueTutors = Array.from(uniqueEmailMap.values());
                setTutors(uniqueTutors.length);

                const totalReview = data.reduce((sum, item) => sum + (item.review || 0), 0);
                setReviews(totalReview);

                const languageSet = new Set(
                    data.map(item => item.language?.toLowerCase().trim())
                );
                setTotalLanguages(languageSet.size);
            });

    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("https://tutor-booking-server-five.vercel.app/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setTotalUsers(data.length);
            })
    }, [])


    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className='container'>
                <div className='flex md:justify-between max-md:justify-center flex-wrap gap-5'>
                    <div className='text-center' data-aos="fade-up" data-aos-delay="50">
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--orange)]'><CountUp
                            start={"0"}
                            end={tutors}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 >Tutors Counts</h4>
                    </div>
                    <div className='text-center' data-aos="fade-up" data-aos-delay="100">
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--orange)]'><CountUp
                            start={"0"}
                            end={reviews}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 >Review Counts</h4>
                    </div>
                    <div className='text-center' data-aos="fade-up" data-aos-delay="150">
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--orange)]'><CountUp
                            start={"0"}
                            end={totalLanguages}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 >Languages Count</h4>
                    </div>
                    <div className='text-center' data-aos="fade-up" data-aos-delay="200">
                        <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 md:pb-5 lg:pb-6 text-[var(--orange)]'><CountUp
                            start={"0"}
                            end={totalUsers}
                            duration={2.75}
                        ></CountUp></strong>
                        <h4 >User's Counts</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;