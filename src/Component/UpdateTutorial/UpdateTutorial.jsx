import React, { useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData, useNavigate } from 'react-router';
import updateImg from '../../assets/images/update.jpg';
import Swal from 'sweetalert2';
import { authContextData } from '../../Provider/AuthProvider';

const UpdateTutorial = () => {

    const { _id, description, imageurl, language, price } = useLoaderData();
    const { user } = useContext(authContextData);
    const navigate = useNavigate();

    const handleUpdateTutorial = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addTutorialFormData = Object.fromEntries(formData.entries());
        if (addTutorialFormData.language) {
            addTutorialFormData.language = addTutorialFormData.language.toLowerCase();
        }

        fetch(`https://tutor-booking-server-five.vercel.app/tutorial/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addTutorialFormData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Tutorial Update successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/mytutorials");
                }
            })

    }


    return (
        <>
            <Header></Header>
            <div className='sec-gap bg-[var(--orange_bg)]'>
                <div className='container'>
                    <div className='md:flex items-center justify-between md:gap-10'>
                        <div className='w-5/12'>
                            <img
                                src={updateImg}
                                className="rounded-lg shadow-2xl w-full"
                            />
                        </div>
                        <div className='w-7/12'>
                            <form onSubmit={handleUpdateTutorial} className="fieldset border border-[var(--orange)] rounded-4xl p-4 md:p-6 lg:p-12 bg-[var(--blue_bg)]">
                                <h2 className='text-[var(--orange)]'>Update Tutorial</h2>
                                <label className="label text-[var(--orange)]">Name</label>
                                <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Name" name='name' value={user.displayName} readOnly />
                                <label className="label text-[var(--orange)]">Email</label>
                                <input type="email" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Email" name='email' value={user.email} readOnly />
                                <label className="label text-[var(--orange)]">Image URL</label>
                                <input defaultValue={imageurl} type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Image URL" name='imageurl' />
                                <label className="label text-[var(--orange)]">Language</label>
                                <input defaultValue={language} type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full capitalize" placeholder="Language" name='language' />
                                <label className="label text-[var(--orange)]">Price</label>
                                <input defaultValue={price} type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Price" name='price' />
                                <label className="label text-[var(--orange)]">Description</label>
                                <textarea defaultValue={description} type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-xl h-24 py-2" placeholder="Description" name='description' ></textarea>
                                <button type='submit' className="btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full">Update Tutorial</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UpdateTutorial;