import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <footer className='bg-[var(--blue)]'>
                <div className="container">
                    <div className="footer sm:footer-horizontal text-base-content sec-gap max-md:gap-3">
                        <aside data-aos="fade-up" data-aos-delay="100">
                            <h2 className='!p-0 text-[var(--orange)]'><Link to={"/"}>Tutor<span className='text-[var(--dark_light)]'>Booking</span></Link></h2>
                            <p className='text-[var(--dark_light)]'>
                                TutorBooking is a modern online <br className='max-sm:hidden' /> platform that connects students<br className='max-sm:hidden' /> with qualified tutors in one place.<br className='max-sm:hidden' /> Our mission is to make it easy,<br className='max-sm:hidden' /> fast, and reliable for students to<br className='max-sm:hidden' /> find the right tutor, while giving<br className='max-sm:hidden' /> tutors the opportunity to share<br /> their expertise.
                            </p>
                        </aside>
                        <nav data-aos="fade-up" data-aos-delay="200">
                            <h4 className="footer-title text-[var(--orange)] opacity-100">Services</h4>
                            <MenuLinks isFooter={true}></MenuLinks>
                        </nav>
                        <div data-aos="fade-up" data-aos-delay="300" className='w-full'>
                            <h4 className="footer-title text-[var(--orange)] opacity-100">Location</h4>
                            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.27042174753!2d88.18253407072858!3d22.535660585181414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1754815096344!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="footer sm:footer-horizontal text-base-content py-4 border-[var(--orange)] border-t flex justify-between items-center flex-wrap max-md:gap-2">
                        <div>
                            <span className='text-xs text-[var(--dark_light)]'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='!p-0 text-[var(--orange)]'><Link to={"/"}>Tutor Booking</Link></span></span>
                        </div>
                        <div>
                            <span className='text-xs text-[var(--dark_light)]'>Design and Developed by <span className='text-[var(--orange)]'>Raben Haldar</span></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;