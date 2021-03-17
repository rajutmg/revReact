import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/"> Home </NavLink>
        <NavLink exact activeClassName="active_class" to="/about"> About Us </NavLink>
        <NavLink exact activeClassName="active_class" to="/user"> User </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact"> Contact Us </NavLink>
        </>
    );
}

export default Menu;