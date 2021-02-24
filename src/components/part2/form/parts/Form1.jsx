import React, {useState} from 'react';

const Form1 = () => {

    const [name, setname] = useState(""); 
    const[fullName, setFullName] = useState("")  ;
    const inputEvent = (event) => {
        // console.log(event);
        console.log(event.target.value);
        setname(event.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }
    return(
        <>
        <h1>Hello {fullName} </h1>
        <form>
        <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name} />
        <button type="submit" onClick={onSubmit} >Submit</button>
        </form>
        </>
    );
} 

export default Form1;