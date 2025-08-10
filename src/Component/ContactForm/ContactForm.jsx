import React, { useRef } from 'react';
import signupImage from '../../assets/images/signup.jpg'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const handleContact = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            `${import.meta.env.VITE_serviceId}`, 
            `${import.meta.env.VITE_templateId}`,  
            form.current,
            `${import.meta.env.VITE_publicId}`    
        )
            .then(() => {
                Swal.fire({ icon: "success", title: "Message sent", timer: 1500, showConfirmButton: false });
                e.target.reset();
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({ icon: "error", title: "Send failed", text: "Try again", timer: 1500, showConfirmButton: false });
            });
    };




    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className='container'>
                <div className='md:flex items-center justify-between md:gap-10'>
                    <div className='w-5/12'>
                        <img
                            src={signupImage}
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                    <div className='w-7/12'>
                        <form ref={form} onSubmit={handleContact} className="fieldset border border-[var(--orange)] rounded-4xl p-4 md:p-6 lg:p-12 bg-[var(--blue_bg)]">
                            <h2 className='text-[var(--orange)]'>Contact Form</h2>
                            <label className="label text-[var(--orange)]">Name</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Name" name='name' required />
                            <label className="label text-[var(--orange)]">Email</label>
                            <input type="email" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Email" name='email'  required/>
                            <label className="label text-[var(--orange)]">Phone</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Phone" name='phone' />
                            <label className="label text-[var(--orange)]">Subject</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Subject" name='title'  required/>
                            <label className="label text-[var(--orange)]">Description</label>
                            <textarea className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-2xl py-3 h-24 resize-none" placeholder="Description" name='description' required></textarea>
                            <button type='submit' className="btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;