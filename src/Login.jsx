import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Mycontext from './context/Mycontext';

function Login() {

    const{setIsAuthenticate} = useContext(Mycontext)
    const [errors,setErrors] =  useState([])
    const navigate = useNavigate()

    const[values, setValues] =useState({
        username:"",
        pwd:""
    })

    const url = import.meta.env.VITE_API_KEY

   

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(values);
           
            axios.post(`${url}/userlogin`,values)
            .then((res)=>{
                // console.log(res)
    
                if(res.data.sc=="successful"){
                    setErrors([])
                    setIsAuthenticate(true)
                    navigate("/home");
    
                }else{
                    console.log(res.data)
                   errors.push("Incorrect username and password")
                   setValues({...values, username:"",pwd:""})
                }
            })
            .then(err=>console.log(err))
    
    
    
    }
    
    // console.log(emptyInput)
   useEffect(()=>{
 
    errors.pop()
    
   },[handleLogin])

  return (
    <div className='w-full' style={{backgroundImage:`url("https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
        <div className='w-full py-10 h-screen flex justify-center items-center'>
            <div className='w-11/12 sm:w-10/12 sm:h-5/6 mx-auto bg-cover bg-no-repeat bg-center flex flex-row shadow-lg  shadow-black'>
                <div className='px-1 w-6/12 text-xs sm:w-6/12 mx-auto bg-white text-purple-400 py-10 sm:px-10'>
                    <div className='flex justify-end'>
                        <button onClick={(e)=>navigate('/signup')}
                        className=' text-xs sm:text-sm'>Do not have account? <span className="text-pink-500">create account</span></button>
                    </div>
                    <div className='flex flex-col items-center  justify-center border border-white h-full'>
                        <h2 className=' text-lg mb-2 sm:text-4xl sm:mb-10 w-8/12 self-start mx-auto text-blue-900'>Welcome Back</h2>
                        <form action="" 
                        onSubmit={handleLogin}
                        className='flex flex-col w-10/12 text-sm sm:w-8/12 sm:text-xl mx-auto gap-2 '>
                            <label htmlFor="username" className='text-start sm:text-sm'>Username</label>

                            <input type="text" name='username' onChange={(e)=>setValues({...values, username:e.target.value})} value={values.username}
                            placeholder='Enter Username'
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md'/>

                            <label htmlFor="password" className='text-start text-sm' >Password</label>

                            <input type="text" name='password' onChange={(e)=>setValues({...values, pwd:e.target.value})}  value={values.pwd}
                            placeholder='Enter Password'
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md'/>
                            
                            {
                            <p className='w-full text-pink-500 text-sm'>{errors[0]}</p>
                            }
                        
                            <button type="submit"
                                className='bg-pink-500 py-2 px-1 sm:mt-10 text-md w-5/12 rounded-full text-white'>
                                    Log In
                            </button>
                        </form>
                    
                    </div>
                    
                    
                </div>
                <div className='sm:h-full bg-purple-500 w-6/12 border-l '>
                    <div className="w-full h-full sm:bg-no-repeat bg-center bg-cover"style={{backgroundImage:`url("https://img.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576738.jpg?w=1060&t=st=1702045416~exp=1702046016~hmac=e3b2cee3f83761c74c2c090e839256eb33dd219fd4683ff55e226d74f9691344")`}}>

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Login