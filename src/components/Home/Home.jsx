import { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  import {useDispatch, useSelector} from 'react-redux'
  import {  Button } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'
  import {addData} from '../../Redux/tableReducer/action'
export const Home = () =>{
    const dispatch = useDispatch()
    const [name,setname] = useState('Login')
    const [k,setk] = useState(false)
    const [u,setu] = useState(false)
     
    useEffect(()=>{
      get()
    },[])
      
   
    useEffect(()=>{
      if(JSON.parse(localStorage.getItem('token'))){
        setname('Logout')
        if(!JSON.parse(localStorage.getItem('admin'))){
          setu(true)
        }
      }
    },[])




    useEffect(()=>{
      if(JSON.parse(localStorage.getItem('admin'))){
        setk(true)
      }
    },[])


    const navigate = useNavigate()


    function get(){
      axios.get('http://localhost:8080/data').then((res)=>{
          dispatch(addData(res.data))
      })
    }

    function nav(){
        navigate('/login')
    }
    function nav2(e){
      navigate(`/listing/${e._id}`)
  }
  function sor(e){
    if(e === 'city'){
      axios.get('http://localhost:8080/sort/City').then((res)=>{
        dispatch(addData(res.data))
    })
    }else if (e === 'cpd'){
      axios.get('http://localhost:8080/sort/cpd').then((res)=>{
            dispatch(addData(res.data))
        })
      // dispatch(addData(a))
    }else if(e === 'rat'){
      axios.get('http://localhost:8080/sort/Rating').then((res)=>{
            dispatch(addData(res.data))
        })
    }else if(e === 'var'){
      axios.get('http://localhost:8080/sort/Verified').then((res)=>{
            dispatch(addData(res.data))
        })
    }else if(e === 'cap'){
      axios.get('http://localhost:8080/sort/Capacity').then((res)=>{
            dispatch(addData(res.data))
        })
    }else{
      get()
    }
  }
  const {table} = useSelector((s) => s.table)


function ac(){
  if(JSON.parse(localStorage.getItem('token'))){
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("id");
     setname('Login') 
     setu(false)
     setk(false)      
    alert('Logout Succesfully')
  }else{

    nav()
  }
}


  return (<>
        <p style={{
            fontSize:'50px',
            fontWeight:'bold',
            marginTop:'10px',
            fontFamily:'initial',
            textAlign:'center',
            marginBottom:'30px'
        }}>Pet Shops</p>
  
   {k&& <Button onClick={()=>navigate('/listing/create')}>Add Shop</Button>}
   
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={(e)=>ac(e)}>{name}</Button>
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={()=>sor('city')}>Sort City</Button>
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={()=>sor('var')}>Sort Varified</Button>
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={()=>sor('cpd')}>Sort CPD</Button>
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={()=>sor('rat')}>Sort Rating</Button>
    <Button w="10%" mt={'25px'} marginLeft={'10px'} marginBottom={'30px'} border={'0px'} colorScheme="orange" type="submit" onClick={()=>sor('cap')}>Sort Capacity</Button>
        
   {k&& <Button marginLeft={'10px'} onClick={()=>navigate('/allPet')}>All Pets</Button>}

   {u && <Button marginLeft={'10px'} onClick={()=>navigate(`/myPet/${JSON.parse(localStorage.getItem('id'))}`)}>My Pets</Button>}


  <TableContainer width={'80%'} marginLeft={'10%'} >

  <Table variant='striped'>
    <TableCaption> As per Bo order</TableCaption>
    <Thead>


        <Tr>
          <Th>id</Th>
          <Th>Name</Th>
          <Th>City</Th>
          <Th>Address</Th>
          <Th>Capacity</Th>
          <Th>Cost per day</Th>
          <Th>Verified</Th>
          <Th>Rating</Th>
          <Th>Detail</Th>
        </Tr>


    </Thead>
    <Tbody>
        {
          table.map((e,i)=>{
                return <Tr key={e._id}>
                
                <Td>{i+1}</Td>
                <Td>{e.Name}</Td>
                <Td>{e.City}</Td>
                <Td>{e.Address}</Td>
                <Td>{e.Capacity}</Td>
                <Td>{e.CPD}</Td>
                <Td>{e.Verified}</Td>
                <Td>{e.Rating}</Td>     <Button
                w="100%"
                h={'50px'}
                border={'0px'}
                colorScheme="blackAlpha"
                type="submit"
                onClick={()=>nav2(e)}
            >
                Detail
            </Button>

              </Tr>
            })
        }

     


    </Tbody>
    


  </Table>
</TableContainer>
        </>)
}