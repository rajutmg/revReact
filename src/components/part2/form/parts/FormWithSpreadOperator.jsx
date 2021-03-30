import React, {useState} from 'react';

const FormWithSpreadOperator = () => {
  // for Fullname
  const [fullName, setFullname] = useState({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      asd:{
        name:"asda"
      }
  });

  const inputEvent = (event) => {
    //   console.log(event.target.value);
    //   console.log(event.target.name);

    //   const value = event.target.value;
    //   const name = event.target.name;

      const{value, name} = event.target

      setFullname((preValue) => {
          console.log(preValue);
          return{
              ...preValue,
              [name]: value,
          }

        //   if(name === 'fname'){
        //       return{
        //           fname: value,
        //           lname: preValue.lname,
        //           email: preValue.email,
        //           phone: preValue.phone,
        //       };
        //   } else if(name === 'lname'){
        //     return{
        //         fname: preValue.fname,
        //         lname: value,
        //         email: preValue.email,
        //           phone: preValue.phone,
        //     };
        // } else if(name === 'email'){
        //     return{
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: value,
        //         phone: preValue.phone,
        //     };
        // } else if(name === 'phone'){
        //     return{
        //         fname: preValue.fname,
        //         lname: preValue.lname,
        //         email: preValue.email,
        //         phone: value,
        //     };
        // }
      })
  }

  //   when form is submit
  const onSubmit = (e) => {
    e.preventDefault();
    alert('form submited');
  };

    return(
        <>
        <h1>Hello {fullName.fname} {fullName.lname} {fullName.email} {fullName.phone}</h1>
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
        <input
          type="email"
          placeholder="email"
          value={fullName.email}
          name="email"
          autoComplete="off"
          onChange={inputEvent}
        />
        <input
          type="phone"
          placeholder="phone"
          value={fullName.phone}
          name="phone"
          onChange={inputEvent}
        />
        <button onClick={onSubmit} >Submit</button>
        </form>
        </>
    );
} 

export default FormWithSpreadOperator;
