import React, { useContext } from 'react';
import tutorial from '../../assets/images/tutorial.jpg'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { authContextData } from '../../Provider/AuthProvider';

const TutorialForm = () => {

    const { user } = useContext(authContextData);
    const navigate = useNavigate();



    const handleAddTutorial = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addTutorialFormData = Object.fromEntries(formData.entries());
        if (addTutorialFormData.language) {
            addTutorialFormData.language = addTutorialFormData.language.toLowerCase();
        }
        const addTutorialData = { ...addTutorialFormData, review: 0, role: "tutor" }

        // const lowerCaseFormData = {};
        // for (let [key, value] of formData.entries()) {
        //     lowerCaseFormData[key] = value.toLowerCase();
        // }
        // const addTutorialData = { ...lowerCaseFormData, review: 0, role: "tutor" }

        // console.log(addTutorialData, user.displayName);



        fetch("http://localhost:3000/tutorials", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addTutorialData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Tutorial Added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/mytutorials");
                }
            })






    }


    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className='container'>
                <div className='md:flex items-center justify-between md:gap-10'>
                    <div className='w-5/12'>
                        <img
                            src={tutorial}
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                    <div className='w-7/12'>
                        <form onSubmit={handleAddTutorial} className="fieldset border border-[var(--orange)] rounded-4xl p-4 md:p-6 lg:p-12 bg-[var(--blue_bg)]">
                            <h2 className='text-[var(--orange)]'>Add Tutorial</h2>
                            <label className="label text-[var(--orange)]">Name</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Name" name='name' value={user.displayName} readOnly />
                            <label className="label text-[var(--orange)]">Email</label>
                            <input type="email" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Email" name='email' value={user.email} readOnly />
                            <label className="label text-[var(--orange)]">Image URL</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Image URL" name='imageurl' />
                            <label className="label text-[var(--orange)]">Language</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Language" name='language' />
                            <label className="label text-[var(--orange)]">Price</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Price" name='price' />
                            <label className="label text-[var(--orange)]">Description</label>
                            <textarea type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--orange)] !outline-0 border-[var(--orange)]  rounded-xl h-24 py-2" placeholder="Description" name='description' ></textarea>
                            <button type='submit' className="btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full">Add Tutorial</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialForm;