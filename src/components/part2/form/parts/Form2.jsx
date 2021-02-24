import React, {useState} from 'react';

const Form2 = () => {
  // for Fullname
  const [name, getname] = useState('');
  const [fullName, getFullname] = useState('');
  // for Password
  const [password, setPassword] = useState('');
  const [G_password, GetPassword] = useState('');

  //   Getting Value
  const getData = (e) => {
    getname(e.target.value);
  };

  const getData1 = (e) => {
    setPassword(e.target.value);
  };

  //   when form is submit
  const onSubmit = (e) => {
    e.preventDefault();
    getFullname(name);
    GetPassword(password);
  };

    return(
        <>
        <h1>Hello {fullName} Your Generated PassWord is {G_password}</h1>
        <form onSubmit={onSubmit}> 
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={getData}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={getData1}
        />
        <button onClick={onSubmit} >Submit</button>
        </form>
        </>
    );
} 

export default Form2;
