import React from "react"
import { BrowserRouter, Route, Routes ,Navigate } from "react-router-dom"
import Signup from "./Components/Singup.jsx"
import Forget from "./Components/Forget.jsx"
import Login from "./Components/Login.jsx"
import DashBoard from "./Components/DashBord.jsx"
import Reset from "./Components/reset.jsx"


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/forgetpassword" element={<Forget/>} />
         <Route path="/reset-password/:randomString/:expirationTimestamp" element={<Reset/>}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/dashboard" element={<DashBoard/>}/>
         <Route path="*" element={<Navigate to='/login'/>} />
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App