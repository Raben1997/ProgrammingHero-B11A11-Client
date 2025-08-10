import React from 'react';
import banner from '../../assets/images/banner.png';
import Swal from 'sweetalert2';

const Banner = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // console.log(email);
        if (email) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Subscribed Successfully!",
                text: "Thank you for joining our newsletter.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <>
            <div style={{ backgroundImage: `url(${banner})` }} className='bg-cover bg-center'>
                <div className='container sec-gap'>
                    <div className='max-w-full w-[550px]' data-aos="fade-right">
                        <div>
                            <h1 className='text-[var(--orange)]'>Transforming Lives <br className='max-md:hidden' /> Through Education.</h1>
                            <p className='text-[var(--orange)]'>At the heart of every transformation lies education — the true catalyst for change. We believe that learning is not just about acquiring knowledge, but about unlocking the full potential within every individual. Through inclusive, accessible, and high-quality education, we aim to empower people from all walks of life to overcome barriers and achieve their dreams. Whether it’s mastering a new skill, building a career, or becoming a changemaker in their community, education lays the foundation for lasting impact.</p>
                            <form onSubmit={handleSubscribe} className='border rounded-4xl border-[var(--orange)] shadow flex mt-4 md:mt-5 lg:mt-6 !max-w-full'>
                                <input type="email" placeholder='youremail@email.com' name='email' className='outline-0 py-2 sm:py-4 px-3 sm:px-6 text-[var(--blue)] placeholder:text-[var(--orange)] text-sm sm:text-base leading-relaxed w-[50%] sm:w-[70%] ' required />
                                <button type='submit' className='py-2 sm:py-4 px-3 sm:px-6 bg-[var(--orange)] rounded-4xl font-bold text-[var(--dark_light)] cursor-pointer hover:bg-[var(--blue)] text-sm sm:text-base leading-relaxed w-[50%] sm:w-[30%]'>Subscribe Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;