import React from "react";
import {Firstname, Lastname} from './ContextAPI';
const CB = () => {
    return(
        <>
        <Firstname.Consumer>
        {(fname) => {
        return (
            <Lastname.Consumer>
            {(lname) => {
                return <h2>Hello {fname} {lname}</h2>
            }}
            </Lastname.Consumer>
        ) 
        }}
        </Firstname.Consumer>
        </>
    );
} 

export default CB;