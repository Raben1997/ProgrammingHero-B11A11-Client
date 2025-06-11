import React from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <>
            <footer className='bg-[var(--blue)]'>
                <div className="container">
                    <div className="footer sm:footer-horizontal text-base-content sec-gap">
                        <aside>
                            <h2 className='!p-0 text-[var(--orange)]'><Link to={"/"}>Tutor<span className='text-[var(--dark_light)]'>Booking</span></Link></h2>
                            <p className='text-[var(--dark_light)]'>
                                ACME Industries Ltd.
                                <br />
                                Providing reliable tech since 1992
                            </p>
                        </aside>
                        <nav>
                            <h6 className="footer-title text-[var(--orange)] opacity-100">Services</h6>
                            <MenuLinks isFooter={true}></MenuLinks>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-[var(--orange)] opacity-100">Company</h6>
                            <a className="link link-hover text-[var(--dark_light)]">About us</a>
                            <a className="link link-hover text-[var(--dark_light)]">Contact</a>
                            <a className="link link-hover text-[var(--dark_light)]">Jobs</a>
                            <a className="link link-hover text-[var(--dark_light)]">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title text-[var(--orange)] opacity-100">Legal</h6>
                            <a className="link link-hover text-[var(--dark_light)]">Terms of use</a>
                            <a className="link link-hover text-[var(--dark_light)]">Privacy policy</a>
                            <a className="link link-hover text-[var(--dark_light)]">Cookie policy</a>
                        </nav>
                    </div>
                    <div className="footer sm:footer-horizontal text-base-content py-4 border-[var(--orange)] border-t flex justify-between items-center">
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