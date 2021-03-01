import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MainAPI = () => {
    const [num, setnum] = useState();
    return(
        <>
        <h1>You choose  {num}  value</h1>
        <select value={num} onChange={(event) =>{
           setnum(event.target.value)
        }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </>
    );
}

export default MainAPI;