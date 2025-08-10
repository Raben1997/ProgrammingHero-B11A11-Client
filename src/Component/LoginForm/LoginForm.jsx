import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import login from '../../assets/images/login.jpg'
import { authContextData } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const LoginForm = () => {

    const { handleSignIn, setUser, handleSignInWithGoogle } = useContext(authContextData);
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleSignIn(email, password)
            .then((result) => {
                setUser(result.user);
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: `${result.user.displayName || "User"} — Logged in successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Invalid Email and Password",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    const handleLoginWithGoogle = () => {
        handleSignInWithGoogle()
            .then((result) => {
                setUser(result.user);
                navigate("/");
                Swal.fire({
                    icon: "success",
                    title: `${result.user.displayName || "User"} — Logged in successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });

                const loggedUser = result.user;

                fetch("http://localhost:3000/users", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: loggedUser.email,
                        displayName: loggedUser.displayName,
                        photoURL: loggedUser.photoURL,
                    }),
                })
                    .then(res => res.json())
                    .then(() => {
                        setUser(loggedUser);
                        navigate("/");
                        Swal.fire({
                            icon: "success",
                            title: `${loggedUser.displayName || "User"} — Logged in successfully!`,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });


            }).catch((error) => {
                console.log(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong. Please try again.",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className='container'>
                <div className='md:flex items-center justify-between md:gap-10'>
                    <div className='w-5/12'>
                        <img
                            src={login}
                            className="rounded-lg shadow-2xl w-full"
                        />
                    </div>
                    <div className='w-7/12'>
                        <div className="fieldset border border-[var(--orange)] rounded-4xl p-4 md:p-6 lg:p-12 bg-[var(--blue_bg)]">
                            <form onSubmit={handleSignin}>
                                <h2 className='text-[var(--orange)]'>Login Form</h2>
                                <label className="label text-[var(--orange)]">Email</label>
                                <input type="email" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Email" name='email' />
                                <label className="label text-[var(--orange)]">Password</label>
                                <input type="password" className="input w-full bg-[var(--orange_bg)] text-[var(--blue)] !outline-0 border-[var(--orange)]  rounded-full" placeholder="Password" name='password' />
                                <div><a className="link link-hover text-[var(--orange)]">Forgot password?</a></div>
                                <button type='submit' className="btn mt-4 bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] rounded-full w-full">Login</button>
                            </form>

                            <div className="divider text-[var(--blue)] font-bold">OR</div>
                            <button onClick={handleLoginWithGoogle} className="btn  bg-[var(--orange)] hover:bg-[var(--blue)] text-[var(--dark_light)] border-[#e5e5e5] rounded-full">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className="mt-4 text-[var(--orange)]">
                                Don’t have an account?
                                <Link to={"/signup"} className="link link-hover text-[var(--blue)] underline ml-1">Create an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;