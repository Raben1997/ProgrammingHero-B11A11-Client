import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoLanguageSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { authContextData } from '../../Provider/AuthProvider';

const TotalLanguages = () => {

    const { setLanguage } = useContext(authContextData);

    let navigate = useNavigate();
    const handleLanguages = (lang) => {
        setLanguage(lang);
        navigate(`/findtutors/${lang}`);
    }

    return (
        <div className='sec-gap'>
            <div className="container">
                <div className='flex flex-wrap gap-4'>
                    <div onClick={() => handleLanguages("english")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="100">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>English Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("hindi")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Hindi Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("bengali")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="300">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Bengali Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("spanish")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="400">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Spanish Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("french")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="500">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>French Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("german")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="600">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>German Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("chinese")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="700">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Chinese Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("japanese")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="800">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Japanese Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div onClick={() => handleLanguages("arabic")} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer shadow-lg' data-aos="fade-up" data-aos-delay="900">
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Arabic Tutor</h4>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalLanguages;