import React, { useState } from 'react'
import './SignUp.scss'
import { createSignUp } from '../../service/ApiCreateNewUser'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name,SetName] = useState("")
    const [email,SetEmail]= useState("")
    const [password,SetPassword] = useState("")
    const navigate = useNavigate();

    const submitSignUp = async()=>{
        const data = await createSignUp(name,email,password)
        if(data&& data.EC ===0 ){
            toast.success(data.EM);
            navigate('/login')
        }
        if(data&& data.EC !== 0){
            toast.error(data.EM)
        }
        
        
        
    }
    return (
    <div className='signup-container'>
        <div className='left-side'>
            <div>
                <h1>Hello</h1>
            </div>

        </div>
        <div className='right-side'>

            <div className='header'>
                Dont noisy
            </div>
            <div className='left-header'>
                <button>English</button>
            </div>

            <div className='title'>
                <h4>PhamVanNhat</h4>

            </div>
            <div className='welcome'>
                <p>Rises the moon</p>

            </div>
            <div className='content-form'>
                 <div className='form-signup'>
                    <label>Username</label>
                    <input type={"user"}
                    value={name}
                    onChange={(e)=>SetName(e.target.value)}    
                    className='form-input'/>

                </div>
                <div className='form-signup'>
                    <label>Email</label>
                    <input type={"email"}
                    value={email}
                    onChange={(e)=>SetEmail(e.target.value)}        
                    className='form-input'/>

                </div>
                <div className='form-signup' >

                    <label>Password</label>
                    <input type={"password"}
                    value={password}
                    onChange={(e)=>SetPassword(e.target.value)}    
                    className='form-input'
              
                    />
                </div>
            </div>


            <div className='submitSignUp'>
                <button onClick={()=>submitSignUp()}>Sign Up</button>
            </div>


        </div>


        
    </div>
  )
}

export default SignUp
