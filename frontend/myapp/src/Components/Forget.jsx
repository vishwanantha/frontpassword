import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../Common/ApiService'

import {toast} from 'react-toastify';

function Forget() {
   const[email,setEmail]=useState("")

   const forgetPassword=async(e)=>{
        e.preventDefault();
         try {
               let res= await AxiosService.post('/user/forget-password',{
                   email
               })

              if(res.status==201){
                   toast.success("Reset link sent the email.please check your email")
              }

         } catch (error) {
             console.log(error);
             toast.error("Invalid email")
         }
   }
  return (
    <>
      <div className='container' style={{ height: '100vh'}} >
          <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
              <div className='container-fluid p-4 shadow' style={{maxWidth:"400px"}}>
              <Form>
                  <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                    <Form.Label  className="form-label">Email address</Form.Label>
                    <Form.Control type="email" className="form-control" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
                  </Form.Group>
                  <Button className='btn btn-primary w-100 mt-3'   onClick={(e)=>forgetPassword(e)} >
                            Forget Password
                  </Button>
              </Form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Forget