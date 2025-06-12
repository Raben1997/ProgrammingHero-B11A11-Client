import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import signupImage from '../../assets/images/signup.jpg'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { authContextData } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const RegistrationForm = () => {

    const { handleUserSignUp, setUser } = useContext(authContextData);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photourl = e.target.photourl.value;
        const password = e.target.password.value;

        handleUserSignUp(name, email, photourl, password)
            .then((result) => {
                console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photourl
                }).then(() => {
                    setUser(result.user);
                    Swal.fire({
                        icon: "success",
                        title: `${result.user.displayName || "User"} — Account Created Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/");
                }).catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Account created but failed to update profile.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    }




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
                        <form onSubmit={handleSignUp} className="fieldset border border-[var(--orange)] rounded-4xl p-4 md:p-6 lg:p-12 bg-[var(--blue_bg)]">
                            <h2 className='text-[var(--orange)]'>Sign Up Form</h2>
                            <label className="label text-[var(--orange)]">Name</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Name" name='name' />
                            <label className="label text-[var(--orange)]">Photo URL</label>
                            <input type="text" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Photo URL" name='photourl' />
                            <label className="label text-[var(--orange)]">Email</label>
                            <input type="email" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Email" name='email' />
                            <label className="label text-[var(--orange)]">Password</label>
                            <input type="password" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Password" name='password' />
                            <button type='submit' className="btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full">Sign Up</button>
                            <p className="mt-4 text-[var(--orange)]">
                                Already have an account?
                                <Link to={"/login"} className="link link-hover text-[var(--blue)] underline ml-1">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;