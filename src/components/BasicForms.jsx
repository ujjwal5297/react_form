import React, { useState } from "react";
import './basicforms.css';

const BasicForms = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  })
  const handleInput= (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({...userRegistration, [name]: value});
    console.log(name, value);
  }
  
  const [records, setRecords] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();

    const newRecord = {...userRegistration, id : new Date().getTime().toString() }
    setRecords([ ...records, newRecord])

    setUserRegistration({username:"", email:"", phone:"", password:""})
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            id="username"
            value={userRegistration.username}
            onChange= {handleInput}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            name="email"
            id="email"
            value={userRegistration.email}
            onChange= {handleInput}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            autoComplete="off"
            name="phone"
            id="phone"
            value={userRegistration.phone}
            onChange= {handleInput}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            value={userRegistration.password}
            onChange= {handleInput}
          />
        </div>
        <button type="submit">Registration</button>
      </form>

        <div style={{backgroundColor: 'white', marginTop: '100px',width:'35%', display: 'flex', alignItems: 'flex-start'}}>
        {
            records.map((curElem)=>{
                return (
                    <div className="showDataStyle">
                    <p> Full Name: {curElem.username}</p>
                    <p>Email: {curElem.email}</p>
                    <p>Phone: {curElem.phone}</p>
                    <p>Password: {curElem.password}</p>
                    </div>
                )
            })
        }
      </div>
    </>
  );
};

export default BasicForms;