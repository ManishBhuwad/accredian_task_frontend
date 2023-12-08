import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Mycontext from './context/Mycontext'

function Registration() {
    const{setIsAuthenticate} = useContext(Mycontext)
    const navigate = useNavigate()

    const [uservalue, setUservalue] = useState({
        username:"",
        pwd:"",
        email:"",
        confirmpwd:""
    })

    const url = import.meta.env.VITE_API_KEY
  
    const[nameError, setNameErrors] = useState([])
    const[pwdError, setPwdError] = useState([])
    const[emailError, setEmailError] = useState([])

    const handleform = (e)=>{

      e.preventDefault();
      if(uservalue.username!="" && uservalue.email!="" && uservalue.pwd!="" && uservalue.confirmpwd!=""){

        if (/\s/.test(uservalue.username)) {
            nameError.push("do not add spaces in username")
        }

        if(uservalue.confirmpwd===uservalue.pwd){
            const passwordRegix =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
            if(passwordRegix.test(uservalue.pwd)){
                console.log("password match")
                axios.post(`${url}/create`,uservalue)
                .then(res=>{
                    console.log(res)
                    if(res.data.Error=="username has taken"){
                        nameError.push(res.data.Error);
                        setUservalue({...uservalue,username:"",})
                        
                    }else if(res.data.Error=="Email already register"){
                        emailError.push(res.data.Error)
                        setUservalue({...uservalue,email:""})
                    } else{
                        setNameErrors([])
                        console.log(res)
                        setIsAuthenticate(true);
                        navigate("/home")
                        
                    }
                })
                .then(err=>console.log(err))
            }else{

                pwdError.push("Week Password")
                setUservalue({...uservalue, pwd:"",confirmpwd:""})
                console.log(pwdError)
            }
         
            

        
            
        }else{
            setUservalue({...uservalue,pwd:"",confirmpwd:""})
            pwdError.push("password not match")
           
        }
       
      }else{

      }
     
    }

    useEffect(()=>{ 
        nameError.pop()
        pwdError.pop()
        emailError.pop();
    },[handleform])

  
  return (
    // <div className=' h-screen bg-cover bg-no-repeat bg-center flex items-center text-center'  style={{backgroundImage:`url("https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>

    //     <div className='w-full py-10 h-screen flex justify-center items-center'>
    //             <div className=' h-5/6 w-6/12 mx-auto bg-cover bg-no-repeat bg-center flex flex-row shadow-lg  shadow-black'>
    //                 <h1 className='text-white mb-10 sm:text-xl'>Sign Up</h1>

                    
    //                 <p className='mt-10 text-white'>Already have an account? <button className='text-blue-600' onClick={(e)=>navigate("/")}>Log In</button></p>

    //             </div>
    //             <div className='h-full bg-purple-500 w-6/12 border-l'>

    //             </div>
    //         </div>
        
       
        
    // </div>






    <div className='w-full' style={{backgroundImage:`url("https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}}>
    <div className='w-full py-10 h-screen flex justify-center items-center'>
        <div className='w-11/12 sm:h-5/6 sm:w-10/12 mx-auto bg-cover bg-no-repeat bg-center flex flex-row shadow-lg  shadow-gray-800'>
            <div className='w-6/12 text-xs sm:w-6/12 mx-auto bg-white text-purple-400 pb-4 sm:py-10 sm:px-10'>
                <div className='flex justify-end'>
                <p className='mt-2 mb-2 text-purple-500'>Already have an account? <button className='text-pink-500' onClick={(e)=>navigate("/")}>Log In</button></p>
                </div>
                <div className='flex flex-col h-full'>
                    <h2 className='text-lg mb-2 sm:text-4xl sm:mb-10 sm:w-8/12 self-start mx-auto text-blue-900'>Create your account</h2>
                
                        <form action="" onSubmit={handleform} className='flex flex-col w-10/12 text-sm sm:w-8/12 sm:text-xl mx-auto gap-2 '>
                            <label htmlFor="username" className='text-start sm:text-sm'>Username</label>
                            <input type="text"  placeholder='Username' onChange={(e)=>setUservalue({...uservalue, username:e.target.value})} value={uservalue.username}
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md' />
                            {
                                nameError.length>0?<p className='text-pink-500 text-sm'>{nameError[0]}</p>:null
                            }
                            <label htmlFor="username" className='text-start sm:text-sm'>Email</label>
                            <input type="email"  placeholder='example@email.com' onChange={(e)=>setUservalue({...uservalue, email:e.target.value})} value={uservalue.email}
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md '/>
                            {
                                emailError.length>0 ? <p className='text-pink-500 text-sm'>{emailError[0]}</p>:null
                            }
                            <label htmlFor="username" className='text-start sm:text-sm'>Password</label>
                            <input type="password"  placeholder='password' onChange={(e)=>setUservalue({...uservalue, pwd:e.target.value })}  value={uservalue.pwd}
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md'/>
                            <label htmlFor="username" className='text-start sm:text-sm'>Confirm Password</label>
                            <input type="password" placeholder='confirm password' onChange={(e)=>setUservalue({...uservalue, confirmpwd:e.target.value })} value={uservalue.confirmpwd}
                            className='text-black rounded-md outline-purple-500 border border-gray-400 p-1 sm:text-md  '/>
                            {
                            pwdError.length>0 ? <p className='text-pink-500 text-sm'>{pwdError[0]}</p> :null
                            }
                            
                            <input type="submit" value={"SIGN UP"}
                            className='bg-pink-500 py-2 px-1 mt-1 sm:mt-10 text-md w-5/12 rounded-full text-white'/>
                        </form>

                </div>
                
                
            </div>
            <div className='sm:h-full bg-purple-500 w-6/12 border-l'>
                <div className="w-full h-full bg-no-repeat bg-center bg-cover"style={{backgroundImage:`url("https://img.freepik.com/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576738.jpg?w=1060&t=st=1702045416~exp=1702046016~hmac=e3b2cee3f83761c74c2c090e839256eb33dd219fd4683ff55e226d74f9691344")`}}>

                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Registration