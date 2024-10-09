import React, { useState } from 'react'
import './Login.scss'
const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword] =useState("")


  console.log("email ",email);
  console.log("pass",password);
  
  const handleSubmit=()=>{
    alert("oke")
  }
  return (
    <div className='login-container'>

        <div className='header'>
              Dont noisy
        </div>

        <div className='title'>
            <h4>PhamVanNhat</h4>

        </div>
        <div className='welcome'>
            <p>Rises the moon</p>

        </div>
        <div className='content-form'>
          <div className='form-login'>
            <label>Email</label>
            <input type={"email"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='form-input'/>

          </div>
          <div className='form-login' >

            <label>Password</label>
             <input type={"password"}
              className='form-input'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        </div>
        <div className='form-forget'>
            <span>Forgot password?</span>
        </div>
        <div className='login-button'>
            <button onClick={()=>handleSubmit()}>Log in To App</button>

        </div>
        <div class="divider">
            <span>OR</span>
        </div>
        <div className='primary-container'>

        </div>
    </div>
  )
}

export default Login
