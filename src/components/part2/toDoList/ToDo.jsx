import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ToDo = () => {
    return(
        <>
                <h1>TO DOLIST</h1>
            <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </form>
        </>
    );
}

export default ToDo;