import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../Common/ApiService';
import {toast} from 'react-toastify'
function Signup() {
     let [name ,setName]=useState("");
     let[email,setEmail]=useState("");
     let[password,setPassword]=useState("");
      let navigate=useNavigate()
     const createUser=async(e)=>{
            e.preventDefault();
            try {
                let res=await AxiosService.post('/user/create',{
                      name,
                      email,
                      password
                })
                if(res.status==201){
                     toast.success("User created sucessfully")
                      navigate('/login')
                }
            } catch (error) {
                console.log(error);
                toast.error("Please fill all the details")
            }
     }
  
  return (
     <>
        <div className='container' style={{ height: '100vh'}}>
           <div  className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
               <div className='container-fluid p-4 shadow' style={{maxWidth:"400px"}}>
               <Form >
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label   className="form-label">Name</Form.Label>
                        <Form.Control type="text" className="form-control" placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label   className="form-label">Email</Form.Label>
                        <Form.Control type="email" className="form-control" placeholder="name@gmail.com" required onChange={(e)=>setEmail(e.target.value)}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label   className="form-label">Password</Form.Label>
                        <Form.Control type="password" className="form-control" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)}/>
                     </Form.Group>
                     <Button  className="btn btn-primary w-100 mt-3"  onClick={(e)=>createUser(e)}>
                           Submit
                     </Button>
                  </Form>
               </div>
           </div>

        </div>
     </>
  )
}

export default Signup