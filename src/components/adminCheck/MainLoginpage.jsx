import AdminLogin from "./AdminLogin"
import AdminSingup from "./AdminSingup"
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Main = () =>{
    
    useEffect(()=>{
        alert(`Admin Login email = a@a.com, pass = a
User Login email = c@c.com, pass = c`)
      },[])

    const navigate = useNavigate()
    return(<>
        <button style={{
            backgroundColor:'#dda15e',
            padding:'10px 20px',
            margin:'20px',
            borderRadius:'20%'
        }}
        onClick={()=>{navigate('/')}}
        >Home</button> 
        <AdminLogin/>
        <AdminSingup/>
    </>)
}