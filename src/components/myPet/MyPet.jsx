import { useParams } from "react-router"
import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";


const Div = styled.div`
border: 0px solid black;
height: 550px;
margin: auto;
width:30%;
margin-top: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
border-radius: 50px;
background-color: whitesmoke;
`
const Space = styled.div`
height: 100px;`

const Btton = styled.button`
background-color: orange;
padding: 10px 20px;
border-radius: 20%;
`

const Img = styled.img`
width: 100%;
height: 50%;
border-radius: 10%;

`
const P = styled.p`
margin-top: 5px;
font-weight: bold;
text-align: left;
margin-left: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 20px;
`


export const MyPet = () =>{
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    
    const [da,sete] = useState([])
    const [d,setd] = useState(false)


    useEffect(()=>{
        axios.get(`http://localhost:8080/myPet/${id}`).then((res)=>{
            console.log(res.data)
            if(res.data.length>0){
                sete(res.data)
                setd(true)
            }
        }).catch((e)=>{console.log(e)})
    },[])

  
  
    return <>
    <p style={{
        marginTop:'10px',
        marginBottom:'0px',
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'initial',
        fontSize:'45px'
    }}>My Pets Detail</p>
    <Btton style={{
        margin:'20px',
        borderRadius:'20%'
    }}
    onClick={()=>{navigate('/')}}
    >Home</Btton> 
    
    
    {d&&
        da.map((e)=>{

         return <Div>
                 <Img src={e.Image}></Img>
                 <P>Pet Name: {e.name}</P>
                 <P>Owner Name: {e.ownerId.name}</P>
                 <P>Contact Number: {e.mobNum}</P>
                 <P>Pet Weight: {e.petWeight}</P>
                 <P>Number Of Day Stay: {e.Days}</P>
                 <P>Shop Name: {e.shopId.Name}</P>
             </Div>
        })
       
    }
    {
        !d &&  <p style={{
            marginTop:'10px',
            marginBottom:'0px',
            fontWeight:'bold',
            textAlign:'center',
            fontFamily:'initial',
            fontSize:'45px'
        }}>No Pet on vacaion</p>
    }
    <Space></Space>
    </>
}