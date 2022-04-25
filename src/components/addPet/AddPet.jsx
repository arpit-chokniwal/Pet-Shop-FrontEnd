import { Input , Stack } from '@chakra-ui/react'
import {  Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const AddPet = () =>{
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    function nav(){
        navigate('/')
    }
    const [obj, setObj] = useState({
        name:'',
        Days:'',
        mobNum:'',
        petWeight:'',
        Image:'',
        ownerId:JSON.parse(localStorage.getItem('id')),
        shopId:id
    })
    const token = JSON.parse(localStorage.getItem('token'))

    
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    function iamchanging(e){

        let {value,id } = e.target
        setObj({
            ...obj,
            [id]: value
        })
    }

    function submit(){
        let m = true
        for(let key in obj){
            if(obj[key] === '' || obj[key] === ' '){
                alert('please Fill all details')
                m = false
                break;
            }
        }
        if(m){
            bear()
        }
    }


    function bear(){
        axios.post('http://localhost:8080/addPet',obj,config).then((res)=>{
            console.log(res.data)
            alert('Submitted')
            
            setObj({
                name:'',
                Days:'',
                mobNum:'',
                petWeight:'',
                Image:'',
                ownerId:'',
                shopId:''
            })
            navigate('/')
        }).catch((e)=>{
            alert('Login First')
            navigate('/login')
        })
    }

    return (<>
        <p style={{
            marginTop:'10px',
            marginBottom:'0px',
            fontWeight:'bold',
            textAlign:'center',
            fontFamily:'initial',
            fontSize:'45px'
        }}>Pet Booking</p>
        <Button
        w="10%"
        mt={'25px'}
        marginLeft={'10px'}
        marginBottom={'30px'}
        border={'0px'}
        colorScheme="orange"
        type="submit"
        onClick={()=>nav()}
    >
        Go to Home
    </Button>

        <div style={{
            display:'flex'
        }}>
        <Stack spacing={2} width={'26%'} marginLeft={'20.5%'} >

        
        <FormControl border={'#CC704B'}>
         <FormLabel ormLabel htmlFor='Image'>Pet Image Url</FormLabel>
            <Input value={obj.Image} id='Image' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Url'/>
        </FormControl>


        <FormControl border={'#CC704B'}>
         <FormLabel ormLabel htmlFor='Name'> Pet Name</FormLabel>
         
            
            <Input value={obj.name} id='name' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Name'   />
        </FormControl>
        
        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='City'>No of Days Stay</FormLabel>
            <Input value={obj.Days} id='Days' type='number' onChange={(e)=>{iamchanging(e)}} placeholder='Days'  />
        </FormControl>



        </Stack>    
      <Stack  spacing={2} width={'26%'} marginLeft={'7%'} >
        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='mobNum'>Contact Number</FormLabel>
            <Input value={obj.mobNum} id='mobNum' type='number'  onChange={(e)=>{iamchanging(e)}} placeholder='Owner Contact number'  />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='petWeight'>Pet Weight</FormLabel>
            <Input value={obj.petWeight} id='petWeight' type='number'  onChange={(e)=>{iamchanging(e)}} placeholder='Pet Weight'  />
        </FormControl>

        </Stack>
        </div>

        <FormControl paddingLeft={'45%'}>
        <Button
            w="20%"
            mt={'25px'}
            colorScheme="orange"
            type="submit"
            onClick={()=>submit()}
        >
            Submit
        </Button>
      </FormControl>


        </>)
}