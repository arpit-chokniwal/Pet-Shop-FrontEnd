import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";

import {  Button } from '@chakra-ui/react'


const Div = styled.div`
border: 0px solid black;
height: 850px;
width: 50%;
margin: auto;
margin-top: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
border-radius: 50px;
background-color: whitesmoke;
`
const Space = styled.div`
height: 200px;`

const Btton = styled.button`
background-color: orange;
padding: 10px 20px;
border-radius: 20%;
`

const Img = styled.img`
width: 100%;
height: 45%;
border-radius: 10%;

`
const P = styled.p`
margin-top: 5px;
font-weight: bold;
text-align: left;
margin-left: 50px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 28px;
`



export const Detail = () =>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [k,setk] = useState(false)
    
    const [e,sete] = useState({})
    useEffect(()=>{
        axios.get(`https://pacific-cliffs-58272.herokuapp.com/data/${id}`).then((res)=>{
            sete(res.data)
        }).catch((e)=>{console.log(e)})
    },[])

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('admin'))){
          setk(true)
        }
      },[])
  function del(){
    axios.delete(`https://pacific-cliffs-58272.herokuapp.com/data/${id}`).then((res)=>{
        navigate('/')
    }).catch((e)=>{
        alert(e)
    })
  }
  
    return <>
    <p style={{
        marginTop:'10px',
        marginBottom:'0px',
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'initial',
        fontSize:'45px'
    }}>Shop Detail</p>
   {!k && <Btton style={{
        margin:'20px',
        borderRadius:'20%'
    }}
    onClick={()=>{navigate('/')}}
    >Home</Btton>} 
 
    {k &&<Button marginLeft={'10px'} onClick={()=>navigate(`/editform/${id}`)}>Edit</Button>}
    {k && <Button marginLeft={'10px'} onClick={()=>del()}>Delete</Button>}
   
    
    
    
    
    
    {
        <Div>


        <Img src={e.Image}></Img>
        <P>Name: {e.Name}</P>
        <P>City: {e.City}</P>
        <P>Address: {e.Address}</P>
        <P>Capacity: {e.Capacity}</P>
        <P>Cost per day: {e.CPD}</P>
        <P>Verified: {e.Verified}</P>
        <P>Rating: {e.Rating}</P>



       { k && <Btton style={{
            marginTop:'3%',
            marginLeft:'42%',
            borderRadius:'20%'
        }}
        onClick={()=>{navigate(`/`)}}
        >Home</Btton> }

     {!k && <Btton style={{
            marginTop:'3%',
            marginLeft:'42%',
            borderRadius:'20%'
        }}
        onClick={()=>{navigate(`/addPet/${id}`)}}
        >Book</Btton> }
        </Div>

    }

    <Space></Space>
    </>
}