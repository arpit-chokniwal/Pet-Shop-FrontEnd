import { ShowForm } from "./ShowForm"

export const Form = () =>{
    return (<>
        <p style={{
            fontSize:'40px',
            fontWeight:'bold',
            fontFamily:'initial',
            textAlign:'center',
            marginTop:'10px'
        }}> Add Pet Shop </p>
        <ShowForm/>
        </>)
}