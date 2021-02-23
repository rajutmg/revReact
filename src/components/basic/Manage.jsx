import React from 'react';
import add, {sub, div, mul} from './Calc_operator';
const greeting = {
    color : '#ef200b',
    backgroundColor : '#ddd'
}
let greetingText = '';
// let current time = new time() 
let currTime = new Date(2021, 2 , 22, 1);
currTime = currTime.getHours();
console.log(currTime);

const cssStyle = {
};
if (currTime >= 1 && currTime < 12) {
    greetingText = 'Good Morning';
    cssStyle.color = 'green';
} else if (currTime > 12 && currTime < 19) {
    greetingText = 'Good After Noon';
    cssStyle.color = 'orange';
} else {
    greetingText = 'Good Night';
    cssStyle.color = 'Pink';
}

function Manage(){
    return(
    <h2 style={greeting}>
        Hello sir, <span style={cssStyle}> {greetingText} </span>
    </h2>
    );
}
function Text1(){
    return(
        <h3 style={{color: '#999'}}>Text1</h3>
    );
}
function Text2(){
    return(
        <h3>Text2</h3>
    );
}
function Calculation(){
    return(
        <>
        <ul>
            <li>The sum of two number is {add(1,3)} </li>
            <li>The Multiple of two number is {mul(5,3)} </li>
            <li>The Division of two number is {div(45,9)} </li>
            <li>The Subtraction of two number is {sub(45,45)} </li>
        </ul>
        </>
    );
}
export default Manage;
export {Text1, Text2, Calculation}