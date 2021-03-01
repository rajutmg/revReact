import React, {useState} from 'react';
import DoList from './DoList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ToDo = () => {

const[inputList, setInputList] = useState();
const[Items, setItems] = useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value);
}

const listOfItems = () => {
  if(inputList !== ''){
    setItems((oldItems) => {
      return[...oldItems, inputList];
    });
    setInputList("");
  } else{
    console.log('Yes');
  }
};

const delItems = (id) => {
  // console.log('deleted');
  setItems((oldItems) => {
    return oldItems.filter((arrElem, index) => {
      return index !== id;
  });
  });
}

    return(
        <>
                <h1>TO DOLIST</h1>
            <form  noValidate autoComplete="off">
            <TextField id="standard-basic" value={inputList}
            onChange={itemEvent} label="Type Some Things" />
      <Button onClick={listOfItems} variant="contained" color="primary">
        +
      </Button>
    </form>
    <ul>
      {/* <li> {inputList} </li> */}
   {Items.map( (itemVal, index) => {
    return <DoList key={index} id={index} text={itemVal} onSelect={delItems} />
   })}
   
    </ul>
        </>
    );
}

export default ToDo;