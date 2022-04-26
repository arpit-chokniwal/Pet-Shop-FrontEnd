import { Input , Stack } from '@chakra-ui/react'
import {  Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export const EditForm = () =>{
    const navigate = useNavigate()
    const {id} = useParams()

    function nav(){
        navigate('/')
    }
    const [obj, setObj] = useState({
        Name:'',
        City:'',
        Address:'',
        Capacity:'',
        CPD:'',
        Verified:'',
        Rating:'',
        Image:''
    })

    function iamchanging(e){

        let {value,id } = e.target
        setObj({
            ...obj,
            [id]: value
        })
    }

    function submit(){
        const data = {}
        for (let key in obj){
            if(obj[key] !== ''){
                data[key] = obj[key]
            }
        } 
        axios.patch(`https://pacific-cliffs-58272.herokuapp.com/data/${id}`,data).then((res)=>{
           alert('Edit Succesfully')
            setObj({
                Name:'',
                City:'',
                Address:'',
                Capacity:'',
                CPD:'',
                Verified:'',
                Rating:'',
                Image:''
            })
            navigate('/')
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
        }}>Edit Shop Detail</p>
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
         <FormLabel ormLabel htmlFor='Image'>Image Url</FormLabel>
            <Input value={obj.Image} id='Image' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Url'   />
        </FormControl>


        <FormControl border={'#CC704B'}>
         <FormLabel ormLabel htmlFor='Name'>Name</FormLabel>
         
            
            <Input value={obj.Name} id='Name' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Name'   />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='City'>City</FormLabel>
            <Input value={obj.City} id='City' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='City'  />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='Address'>Address</FormLabel>
            <Input value={obj.Address} id='Address' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Address'  />
        </FormControl>

        </Stack>
        
      <Stack  spacing={2} width={'26%'} marginLeft={'7%'} >
        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='Capacity'>Capacity</FormLabel>
            <Input value={obj.Capacity} id='Capacity' type='number'  onChange={(e)=>{iamchanging(e)}} placeholder='Capacity'  />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='CPD'>Cost per day</FormLabel>
            <Input value={obj.CPD} id='CPD' type='number'  onChange={(e)=>{iamchanging(e)}} placeholder='Cost per day'  />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='Verified'>Verified</FormLabel>
            <Input value={obj.Verified} id='Verified' type='text' onChange={(e)=>{iamchanging(e)}} placeholder='Verified'  />
        </FormControl>

        <FormControl border={'#CC704B'}>
            <FormLabel htmlFor='Rating'>Rating</FormLabel>
            <Input value={obj.Rating} id='Rating' type='number'  onChange={(e)=>{iamchanging(e)}} placeholder='Rating'  />
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