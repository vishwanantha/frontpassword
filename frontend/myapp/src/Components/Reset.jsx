import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../Common/ApiService';
import {toast} from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function Reset() {

     const[password,setPassword]=useState(" ")

     const {randomString,expirationTimestamp}=useParams();
     const navigate=useNavigate();

     const resetPassword = async (e) => {
        e.preventDefault();
        try {
          
            const res = await AxiosService.post(`/user/reset-password/${randomString}/${expirationTimestamp}`, {
              newPassword: password,
            });
      
            if (res.status === 201) {
              toast.success("Password updated");
              navigate('/login');
            }

            } catch (error) {

              if (error.response && error.response.status === 400) {
                toast.error("Invalid token or token has expired. Please request a new reset link.");
              } else {
                console.log(error);
              }

            }
    };
  
  return (
    <>
      <div className='container' style={{ height: '100vh'}} >
          <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          <div className='container-fluid p-4 shadow' style={{maxWidth:"400px"}}>
          <Form>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="password"  className="form-control" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              <Button className="btn btn-primary w-100 mt-3"  onClick={(e)=>resetPassword(e)} >
                       Update Password
              </Button>
          </Form>
          </div>
          </div>
      </div>
    </>
  )
}

export default Reset