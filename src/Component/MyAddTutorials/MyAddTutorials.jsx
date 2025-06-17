import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { authContextData } from '../../Provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyAddTutorials = () => {

    const [myTutorials, setMyTutorials] = useState([]);
    const { user } = useContext(authContextData);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (user?.email) {
            fetch(`https://tutor-booking-server-five.vercel.app/mytutorials?email=${user.email}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setMyTutorials(data);
                });
        }
    }, [user?.email]);





    const handleDeleteTutorial = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tutor-booking-server-five.vercel.app/tutorial/${id}`, {
                    'method': 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        const delMytutorials = myTutorials.filter(myTutorial => myTutorial._id !== id);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setMyTutorials(delMytutorials);
                    })
            }
        });

    }



    return (
        <div className='sec-gap bg-[var(--orange_bg)]'>
            <div className="container">
                <h2 className='text-[var(--orange)]'>My Tutorials List</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Language</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Review</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myTutorials.map((myTutorial, index) => {
                                    return (
                                        <tr key={myTutorial._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <img
                                                    src={myTutorial.imageurl}
                                                    alt="Tutorial Image"
                                                    className='w-14 h-14 object-cover rounded-md'
                                                />
                                            </td>
                                            <td className='capitalize'>{myTutorial.language}</td>
                                            <td>{myTutorial.price}</td>
                                            <td>{myTutorial.description}</td>
                                            <td>{myTutorial.review}</td>
                                            <td>
                                                <div className='flex gap-3 items-center'>

                                                    <Link to={`/updatetutorial/${myTutorial._id}`}>
                                                        <button className="bg-[var(--orange)] w-10 h-10 rounded-full border-0 shadow-none flex justify-center items-center cursor-pointer">
                                                            <FaEdit className='text-lg text-[var(--dark_light)]' />
                                                        </button>
                                                    </Link>

                                                    <button onClick={() => handleDeleteTutorial(myTutorial._id)} className="bg-[var(--orange)] w-10 h-10 rounded-full border-0 shadow-none flex justify-center items-center cursor-pointer">
                                                        <MdDelete className='text-xl text-[var(--dark_light)]' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddTutorials;