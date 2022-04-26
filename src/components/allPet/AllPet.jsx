import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";



const Div = styled.div`
border: 0px solid black;
height: 550px;
width: 95%;
overflow: hidden;
margin: auto;
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
margin-left: 10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 20px;
`
const MainDiv = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
`

export const AllPets = () =>{
    const navigate = useNavigate()
    
    const [da,sete] = useState([])


    useEffect(()=>{
        axios.get(`https://pacific-cliffs-58272.herokuapp.com/addPet`).then((res)=>{
            sete(res.data)
            console.log(res.data)
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
    }}>All Pets Detail</p>
    <Btton style={{
        margin:'20px',
        borderRadius:'20%'
    }}
    onClick={()=>{navigate('/')}}
    >Home</Btton> 
    
    <MainDiv>

    
    {
        da.map((e)=>{
           return <Div>
            <Img src={e.Image}></Img>
            <P>Pet Name: {e.name}</P>
            <P>Owner Name: {e.ownerId.name}</P>
            <P>Owner email: {e.ownerId.email}</P>
            <P>Contact Number: {e.mobNum}</P>
            <P>Pet Weight: {e.petWeight}</P>
            <P>Number Of Day Stay: {e.Days}</P>
            <P>Shop Name: {e.shopId.Name}</P>
            </Div>
        })
    }
    </MainDiv>
    <Space></Space>
    </>
}