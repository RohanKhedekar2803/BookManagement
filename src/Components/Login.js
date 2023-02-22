import React from 'react'
import Image from '../assets/rectangle.jpg'
import Logo from '../assets/logo.jpg'
import vector1 from '../assets/logovector.jpg'
import { Email } from '@material-ui/icons';
import 'boxicons'
import { useState } from 'react';
import UserService from './Services/UserService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  // const [error, setError] = useError(false)
  const [user, setUser] = useState({ 
    email: "",
    password: ""
  });
  
  const navigate=useNavigate();
  const handleEvent=(e)=>{
    const value =e.target.value
    setUser({...user,[e.target.name]: value});
  }
  const loginUser=(e)=>{
    e.preventDefault();
    console.log(user)
    //api call to save 
    UserService.saveuser(user).then(()=>navigate("/")) 
    //if there is any error set error to true; and call clearuser    
    //  navigate("/")
 }

 const clearUser=(e)=>{
  e.preventDefault();
  setUser({
    username: "",
    email: "",
    password: ""
  })
}

  return (
    <div className=' h-screen w-screen flex  bg-white p-6'>
      
        <div className='w-6/12 ml-4'>
          <div className='flex'>
            <div class="inline-block w-6 h-6 bg-red-500 rounded-full "></div>
            <div class="inline-block w-6 h-6 bg-yellow-500 rounded-full ml-3"></div>
            <div class="inline-block w-6 h-6 bg-green-500 rounded-full ml-3"></div>
          </div>
          <div className='flex'>
            <img src={vector1} className="w-auto mt-7"></img>
            <img  src={Logo} className="w-auto mt-7 ml-3"></img>
          </div>
          <div className='text-4xl font-sans font-bold mt-32'>
             Member Login 
          </div>
          <div className='font-sans text-lg text-gray-400 font-normal mt-2'>
          Let's get Started !!
          </div>

          <div className='mt-8'>

              <div className='mt-4'>
                <div className='flex'>
                  <box-icon type='solid' name='envelope'></box-icon>
                  <p className='text-xl font-sans font-semibold pl-2'>Enter Your Email</p>
                </div>
               
                <input type={Email} name="email" value={user.email} onChange={(e)=>handleEvent(e)} className='p-3 text-lg bg-slate-100 w-5/6  h-12 rounded-lg mt-2' ></input>
              </div>

              <div className='mt-4'>
              <div className='flex'>
                  <box-icon name='lock' type='solid' color='black'></box-icon>
                  <p className='text-xl font-sans font-semibold pl-1'>Enter Your Password</p>
                </div>
                
                <input type={'password'} name="password" value={user.password} onChange={(e)=>handleEvent(e)} className='p-3  text-lg bg-slate-100 w-5/6 h-12 rounded-lg mt-2' ></input>
              </div>

              <div>
                <button onClick={loginUser} className='w-5/6  h-12 bg-blue-600 rounded-lg text-white mt-8'>
                  Create My Account
                </button>
              </div>

          </div>
         
        </div>
      
      <div className='w-6/12 h-full pr-4 p-2' >
        <img src={Image}  className='w-full h-full '/>
      </div>
    </div>
  )
}

export default Login
