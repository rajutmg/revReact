import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    console.log(location);
    return(
        <>
        <h1>This is {fname} {lname} Page</h1>
        <h2>My Current Location is {location.pathname}</h2>
        {location.pathname === '/user/yangi/sherpa' ? (<button onClick={() => {history.goBack()}} >Go Back</button>  ) : null } 
        <br/>
        {location.pathname === '/user/hari/tamang' ? (<button onClick={() => {history.push("/")}} >Back Home</button>  ) : null }
        </>
    );
}

export default User;