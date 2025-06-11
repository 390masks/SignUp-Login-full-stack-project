import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {
  const[username,setUsername]=useState('')
  const[pass,setPass]=useState('')

  const signIn = async()=>{
   try{
    const resp = await axios.post('http://127.0.0.1:8000/api/signin/',{
      username : username,
      password: pass
    });
    console.log(resp.data.access)
    setUsername('')
    setPass('')
   }catch(error){
    console.error("Signup failed:",error.message)
   }
  } 
  return (
    <div>
      <h1>SIGN IN</h1>
      <input type="text"
      value={username}
      placeholder='Enter your Username' 
      onChange={(e)=>setUsername(e.target.value)}/>

      <input type="password" 
      value={pass}
      placeholder='Enter your password'
      onChange={(e)=>setPass(e.target.value)}/>

      <button type='submit' onClick={signIn}>Login</button>
    </div>
  )

  }
 


export default Signin