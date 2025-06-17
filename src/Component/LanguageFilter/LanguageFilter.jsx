import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TutorCard from '../../TutorCard/TutorCard';

const LanguageFilter = () => {
    const { language } = useParams();
    const [languages, setLanguages] = useState([])



    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(`https://tutor-booking-server-five.vercel.app/mytutorialshome?language=${language}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setLanguages(data);
            })
    }, [])



    return (
        <>
            <Header></Header>
            <div className='sec-gap bg-[var(--orange_bg)]'>
                <div className='container'>
                    <div>
                        <h2 className='capitalize'>{language} Tutor</h2>
                        {
                            languages.length === 0 ? (
                                <h2 className="text-[var(--orange)]">No tutor found for this language.</h2>
                            ) :
                                <div className='grid gap-5'>
                                    {
                                        languages.map(language => <TutorCard key={language._id} tutorial={language}></TutorCard>)
                                    }
                                </div>
                        }

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LanguageFilter;