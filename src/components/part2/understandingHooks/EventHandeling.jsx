import React, {useState} from 'react';

const EventHandeling = () => {
    let bgColor = '#000';
    const[newColor, updateColor] = useState(bgColor);
    const[newText, updateText] = useState('HoverMe');

    const newBg = () => {
        let newBack = "#999";
        updateColor(newBack);
        updateText('Changed');
    }
    const changeDouble = () => {
        let newBack = "#000";
        updateColor(newBack);
        updateText('HoverMe');
    }
    return(
        <>
        <div id="box" style={{backgroundColor: newColor}}>
            <button onMouseEnter={newBg} onMouseLeave={changeDouble} > {newText} </button>
        </div>
        </>
    )
}

export default EventHandeling;