import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <NavLink activeClassName="active_class" exact to="/"> Home </NavLink>
        <NavLink activeClassName="active_class" exact to="/about"> About Us </NavLink>
        <NavLink activeClassName="active_class" exact to="/contact"> Contact Us </NavLink>
        </>
    );
}

export default Menu;