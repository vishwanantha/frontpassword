import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import AxiosService from '../Common/ApiService.jsx';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {

       const [email,setEmail]=useState("");
       const [password,setPassword]=useState("");
       let  navigate=useNavigate();
          
       let validateLogin=async(e)=>{
                e.preventDefault();

            try {

                  let res=await AxiosService.post('/user/login',{
                      email,
                      password
                  })
                 
                  if(res.status==201){
                        toast.success("Login sucessfull");
                        sessionStorage.setItem("name",res.data.user.name)
                        sessionStorage.setItem("email",res.data.user.email)
                        navigate('/dashboard')
                  }
                    
                 } catch (error) {
                    console.log(error);
                     toast.error("Invalid Login")
                 }
           }
        
  return (
    <>
      <div className='container' style={{ height: '100vh'}}>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
            <div className='container-fluid p-4 shadow '  style={{maxWidth:"400px"}}>
                <Form >

                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control type="email"  className="form-control" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control type="password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Button className='btn btn-primary w-100 mt-3' onClick={(e)=>validateLogin(e)} >
                        Login
                    </Button>

                    <Form.Group className='text-center mt-4'>
                        <Form.Label ><Link to={'/forgetpassword'} style={{textDecoration:"none"}} >Forget Password?</Link></Form.Label>
                    </Form.Group>

                    <Form.Group className='text-center'>
                       <Form.Label >Don't have an account <Link to={'/signup'} style={{textDecoration:"none"}}>signup?</Link></Form.Label> 
                    </Form.Group>

                </Form>
            </div>
            </div>
      </div>
    </>
  )
}

export default Login