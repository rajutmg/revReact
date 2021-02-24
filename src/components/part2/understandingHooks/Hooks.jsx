import React, {useState} from 'react';


const Hooks = () => {
// basic Hooks
const [count, setCount] = useState(0);

const IncNum = () => {
    setCount(count + 1);
}

// get local time refresh 
let newTime = new Date().toLocaleTimeString();
const [ ctime, setTime ] = useState(newTime);
const UpdateTime = () => {
    let newTime1 = new Date().toLocaleTimeString();
    setTime(newTime1);
}

setInterval(UpdateTime, 1000);

    return(
        <>
        {/* inc Count  */}
        <h1> {count} </h1>
        <button onClick={IncNum}>Click Me </button>

{/* Local Time Refresh  */}
    <h1>{ctime}</h1>
    {/* <button onClick={UpdateTime}>Get Time </button> */}
        </>
    );
}

export default Hooks;