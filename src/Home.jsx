import React, { useContext } from 'react'
import Mycontext from './context/Mycontext'
import { useNavigate } from 'react-router-dom'

function Home() {
    const{setIsAuthenticate} = useContext(Mycontext)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        setIsAuthenticate(false)
        navigate("/")

    }
  return (
    <>
    <div className='w-full h-screen bg-no-repeat bg-cover bg-center' >
        
        <div className='w-full h-full' style={{background:`url(" https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}} >
            <div className='w-full h-24 flex justify-end items-center px-10'>
            <button onClick={handleLogout} className='w-3/12 sm:w-1/12 py-1 rounded-md border border-purple-700 bg-purple-300 hover:border-white'>Logout</button>
            </div>
            
        </div>
    


    </div>
      
    </>
 

  )
}

export default Home