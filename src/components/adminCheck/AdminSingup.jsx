import React, { useState } from "react";
import {
  Container,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Input,
} from "@chakra-ui/react";
import axios from 'axios'
import { useNavigate } from "react-router";

function AdminSingup() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/ragister',userData)
    .then(function (response) {
      console.log(response.data)
      if(response.data.message !== 'email alredy exist'){
      localStorage.setItem("token" , JSON.stringify(response.data.token))
      localStorage.setItem("admin" , JSON.stringify(response.data.admin))
      localStorage.setItem("id" , JSON.stringify(response.data.user._id))
      alert('Register Succesfulluy')
      setUserData({
        name:"",
        email: "",
        password: ""
      })
      setTimeout(() => {
        
        navigate('/')
      }, 500);
    }else{
      alert('email alredy exist')
      setUserData({
        name:"",
        email: "",
        password: ""
      })
    }
    })
    .catch(function (error) {
      alert('email alredy exist')
      // console.log(error);
      setUserData({
        email: "",
        password: ""
      })
    });
  };
  
  return (
    <Container maxW="md">
      <Heading style={{
        marginBottom:'-40px',
        textAlign:'center',
        marginTop:'40px'
      }}>Register</Heading>
      <Flex
        justify="center"
        align="center"
        direction="column"
        textAlign="center"
        borderColor="gray.200"
        borderRadius="10px"
        overflow={"hidden"}
        marginTop="50"
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
      >
        <FormControl w="100%" borderRadius="lg" p={"3"} cursor="pointer" mt={5}>
        <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={onChangeInput}
            autoComplete={"off"}
            value={userData.name}
          />
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={onChangeInput}
            autoComplete={"off"}
            value={userData.email}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            onChange={onChangeInput}
            type="password"
            placeholder="Enter password"
            value={userData.password}
          />
          <Button
            w="50%"
            mt={4}
            colorScheme="blue"
            type="submit"
            style={{
              backgroundColor:'#dda15e'
            }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
}

export default AdminSingup;