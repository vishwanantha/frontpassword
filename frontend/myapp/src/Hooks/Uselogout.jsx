import React from 'react'
import { useNavigate } from 'react-router-dom'
function useogout() {
     let navigate=useNavigate();
  return ()=>{
            sessionStorage.clear()
            navigate('/login')
  }
}

export default useogout