import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [num, setnum] = useState(0);
    const [num1, setnum1] = useState(0);

    useEffect(() => {
        // alert('I am clicked');
        // console.log("I am clicked");
        document.title = `You have clicked me ${num} times`;
    }, [num]);
    return(
        <>
        <button onClick={() => {
            setnum(num + 1);
        }} > Click Me {num} </button>

        <button onClick={() => {
            setnum1(num1 + 1);
        }} > Click Me {num1} </button>
        </>
    );
}

export default UseEffect;