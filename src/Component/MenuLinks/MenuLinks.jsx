import React from 'react';
import { NavLink } from 'react-router';




const MenuLinks = ({ isFooter }) => {

    const menuFooterLink = <>
        <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/">Home</NavLink>
        <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/about">About</NavLink>
        <NavLink className={isFooter ? "link link-hover text-[var(--dark_light)]" : "p-2 !bg-transparent text-[var(--dark_light)] hover:text-[var(--orange)]"} to="/service">Service</NavLink>
    </>;

    return (
        <>
            {menuFooterLink}
        </>
    );
};

export default MenuLinks;