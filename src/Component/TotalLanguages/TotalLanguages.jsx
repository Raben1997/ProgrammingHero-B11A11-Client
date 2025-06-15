import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoLanguageSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';

const TotalLanguages = () => {

    let navigate = useNavigate();
    const handleLanguages = () => {
        navigate("/findtutors");
        
    }

    return (
        <div className='sec-gap'>
            <div className="container">
                <div className='flex flex-wrap border border-[var(--blue)] p-4 md:p-8 rounded-2xl gap-4'>
                    <div onClick={() => handleLanguages()} className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>English Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Hindi Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Bengali Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Spanish Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>French Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>German Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Chinese Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Japanese Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
                        </div>
                        <div className='pl-3'>
                            <FaArrowRight size={30} className='text-[var(--orange)]' />
                        </div>
                    </div>
                    <div className='bg-[var(--blue_bg)] p-3 rounded-2xl w-full sm:w-[48%] lg:w-[32%] flex justify-between items-center cursor-pointer'>
                        <div>
                            <IoLanguageSharp className='mb-4' size={40} />
                            <h4>Arabic Tutor</h4>
                            <p className='!p-0'>100 Teachers</p>
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