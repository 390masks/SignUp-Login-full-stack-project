import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Sign = () => {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[pass,setPass]=useState('')

  const signup = async()=>{
    try{
   const resp=await axios.post('http://127.0.0.1:8000/api/signup/',{
    username: username,
    email : email,
    password:pass
   });
    console.log(resp.data)
    setUsername('')
    setEmail('')
    setPass('')
  }
    catch(error){
      console.error("Signup failed:", error.response?.data || error.message);
    }
  }
  return (
    <div className='wrap'>
      <section id='maincontainer'>
      <h1>Signup</h1>
      <input type="text"
      placeholder='Create a username' 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}/>


      <input type="text"
      placeholder='Enter you mail' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>


      <input type="password"
      placeholder='Create a password' 
      value={pass}
      onChange={(e)=>setPass(e.target.value)}/>

      <button onClick={signup}>Signup</button>
      </section>
    </div>
  )
}

export default Sign