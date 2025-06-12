import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { authContextData } from '../../Provider/AuthProvider';




const MenuLinks = ({ isFooter }) => {

    const { user } = useContext(authContextData);

    const menuFooterLink = <>
        <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/">Home</NavLink>
        <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/findtutors">Find Tutors</NavLink>
        {
            user && <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/addtutorials">Add Tutorials</NavLink>
        }
        {
            user && <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/mytutorials">My Tutorials</NavLink>
        }
        {
            user && <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/mybookedtutors">My Booked Tutors</NavLink>
        }
    </>;

    return (
        <>
            {menuFooterLink}
        </>
    );
};

export default MenuLinks;