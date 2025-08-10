import React, { useEffect, useState } from 'react';
import TutorCard from '../../TutorCard/TutorCard';

const AllTutors = () => {


    const [languages, setLanguages] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTutors, setFilteredTutors] = useState([]);
    // const [searchedTerm, setSearchedTerm] = useState('');


    useEffect(() => {
        fetch(`http://localhost:3000/tutorials`)
            .then(res => res.json())
            .then(data => {
                setLanguages(data);
                setFilteredTutors(data);
            })
    }, [])

    // const handleSearch = () => {
    //     const filtered = languages.filter(tutor =>
    //         tutor.language.toLowerCase().includes(searchTerm.toLowerCase().trim())
    //     );
    //     setFilteredTutors(filtered);
    //     setSearchedTerm(searchTerm);
    // };

    useEffect(() => {
        const filtered = languages.filter(tutor =>
            tutor.language.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
        setFilteredTutors(filtered);
    }, [searchTerm, languages]);


    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className="container">
                <div>
                    <h2 className='text-[var(--orange)]'>Find Tutor</h2>
                    <form className='border rounded-4xl border-[var(--orange)] shadow flex !max-w-full '>
                        <input type="text" placeholder='Search Language' name='search' className='outline-0 py-2 sm:py-4 px-3 sm:px-6 text-[var(--blue)] placeholder:text-[var(--orange)] text-sm sm:text-base leading-relaxed bg-[var(--blue_bg)] w-full rounded-4xl' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        {/* <button type='button' className='py-2 sm:py-4 px-3 sm:px-6 bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer hover:bg-[var(--blue)] text-sm sm:text-base leading-relaxed w-[50%] sm:w-[30%]' onClick={handleSearch}>Search Language</button> */}
                    </form>
                </div>
                <div>
                    <h2 className='text-[var(--orange)] pt-4 md:pt-5 lg:pt-6 capitalize'>{searchTerm || "All"} Tutor</h2>
                    <div className='grid gap-5'>
                        {
                            filteredTutors.length > 0 ? (
                                filteredTutors.map(language => (
                                    <TutorCard key={language._id} tutorial={language}></TutorCard>
                                ))
                            ) : (
                                <span className='text-[var(--orange)] font-semibold'>No tutors found for this language.</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTutors;