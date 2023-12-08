
import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import { useContext } from 'react'
import Mycontext from './context/Mycontext'
import Home from './Home'


function App() {

  const {isAuthenticate} = useContext(Mycontext)

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,

    },
    {
          path:"/signup",
          element:<Registration/>
    },
    {
      path:"/home",
      element:  isAuthenticate ?<Home/> : <Login/>
    }
   

       
  ])
    

  

  return (
  
  <RouterProvider router={router}/>

  )
}

export default App
