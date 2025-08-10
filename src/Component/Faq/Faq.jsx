import React from 'react';


const Faq = () => {
    return (
        <div className='sec-gap'>
            <div className="container">
                <h2 className='text-center text-[var(--orange)]'>Frequently Asked Questions</h2>
                <div className='grid gap-5'>
                    <div className="collapse collapse-arrow bg-[var(--blue_bg)] p-3 rounded-2xl  cursor-pointer" data-aos="fade-up" data-aos-delay="100">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Is there any fee to register as a student or tutor?</div>
                        <div className="collapse-content text-sm">No, registration is completely free for both students and tutors.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-[var(--blue_bg)] p-3 rounded-2xl  cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Can I filter tutors by language or subject?</div>
                        <div className="collapse-content text-sm">Yes, you can search and filter tutors based on language, subject, or price to find the best match.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-[var(--blue_bg)] p-3 rounded-2xl  cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Is online tutoring available?</div>
                        <div className="collapse-content text-sm">Yes, most of our tutors offer online sessions via Zoom, Google Meet, or other platforms.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-[var(--blue_bg)] p-3 rounded-2xl  cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">How can I contact support if I face any issues?</div>
                        <div className="collapse-content text-sm">You can reach out to our support team through the “Contact Us” page or via email provided on the website footer.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;