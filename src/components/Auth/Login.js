import React, { useState } from 'react'
import './Login.scss'
import { postLogin } from '../../service/ApiCreateNewUser';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/accountAction';
const Login = () => {
  const dispatch = useDispatch()
  const [email,setEmail]= useState("");
  const [password,setPassword] =useState("")
  
  const navigate = useNavigate();
  const handleSubmit=async()=>{
    const data = await postLogin(email,password)

    if(data&& data.EC === 0){
      dispatch(doLogin(data))
      toast.success(data.EM)
      navigate('/');
    }
    if(data&& data.EC !==0){
      toast.error(data.EM)
    }


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
            <button onClick={()=>handleSubmit()}>Log In</button>

        </div>
        <div class="divider">
            <span>OR</span>
        </div>
          <div className='login-other'>
            <button ><FaGoogle className='icon-button'/>Log In With Google</button>

        </div>
           <div className='login-other'>
            <button ><FaFacebookF className='icon-button'/>Log In With FaceBook</button>

        </div>
     
    </div>
  )
}

export default Login
