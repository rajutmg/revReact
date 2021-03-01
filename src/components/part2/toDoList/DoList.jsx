import React from 'react';
import Button from '@material-ui/core/Button';

const flexDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '20px',
}

const DoList = (props) => {
    return (
        <>
        <div style={{ display: 'flex', 
    padding: '10px 0',
    fontSize: '18px'
}}>
        <Button onClick={() => {
props.onSelect(props.id)
        }} variant="contained" color="primary">
        -
      </Button>
        <li style={flexDiv}> {props.text} </li>
        </div>
        </>
    )
}
export default DoList;