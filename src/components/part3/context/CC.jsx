import React,{useContext} from "react";
// import CB from './CB';
import {Firstname, Lastname} from './ContextAPI';

const CC = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return(
        <>
        {/* <CB/> */}
        <h2>Hello {fname} {lname}</h2>
        </>
    );
} 

export default CC;