import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MainAPI = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmoves] = useState();
    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            // console.log(res.data.name);
            setname(res.data.name);
            setmoves(res.data.moves.length);
        }
        getData();
    },)
    return(
        <>
        <h1>You choose  {num}  value <br/> My name is {name} <br/> I have {moves} moves</h1>
        <select value={num} onChange={(event) =>{
           setnum(event.target.value)
        }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </>
    );
}

export default MainAPI;