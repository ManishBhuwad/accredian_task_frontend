import { useState } from "react";
import Mycontext from "./Mycontext";




const MycontextProvider=({children})=> {

  const[isAuthenticate, setIsAuthenticate] = useState(false);

  return (
    <Mycontext.Provider value={{isAuthenticate, setIsAuthenticate}}>
        {children}
    </Mycontext.Provider>
  )
}

export default MycontextProvider