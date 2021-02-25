import React, {useState} from 'react';

const Form3 = () => {
  // for Fullname
  const [fullName, setFullname] = useState({
      fname: "",
      lname: "",
  });

  const inputEvent = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);
      const value = event.target.value;
      const name = event.target.name;

      setFullname((preValue) => {
          console.log(preValue);
          if(name === 'fname'){
              return{
                  fname: value,
                  lname: preValue.lname,
              };
          } else if(name === 'lname'){
            return{
                fname: preValue.fname,
                lname: value,
            };
        }
      })
  }

  //   when form is submit
  const onSubmit = (e) => {
    e.preventDefault();
    alert('form submited');
  };

    return(
        <>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <form onSubmit={onSubmit}> 
        <input
          type="text"
          placeholder="First name"
          value={fullName.fname}
          name="fname"
          onChange={inputEvent}
        />
        <br />
        <input
          type="text"
          placeholder="lastname"
          value={fullName.lname}
          name="lname"
          onChange={inputEvent}
        />
        <button onClick={onSubmit} >Submit</button>
        </form>
        </>
    );
} 

export default Form3;
