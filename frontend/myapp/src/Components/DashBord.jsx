import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import useLogout from '../Hooks/Uselogout.jsx';
function DashBoard() {

    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("")

     let logout = useLogout()

    useEffect(()=>{
          
          let userName= sessionStorage.getItem("name");
          let email =sessionStorage.getItem("email");

          if(userName && email){
               setUserName(userName);
               setEmail(email);
          }    
    },[])

  return (
     <>
         <Navbar className="bg-body-tertiary justify-content-end ">
            <Button type="submit" className='mx-5' onClick={logout}>logout</Button>
         </Navbar>

         <div className='mt-5 text-center'>
               <h1>Welcome🙏 to User Dashboard👋</h1>
               <div className='mt-5'>
                  <p><b>Name:</b> {userName}</p>
                  <p><b>Email:</b> {email}</p>
               </div>
         </div>

    </>
  )
}

export default DashBoard