import {Routes,Route} from "react-router-dom";
import { AddPet } from "../components/addPet/AddPet";
import { Detail } from "../components/Detail/Detail";
import { Form } from "../components/Form/From";
import { Home } from "../components/Home/Home";
import {Main} from  '../components/adminCheck/MainLoginpage'
import { EditForm } from "../components/editForm/EditForm";
import { AllPets } from "../components/allPet/AllPet";
import { MyPet } from "../components/myPet/MyPet";
import { PNf } from "../components/PNF/PNF";

export const Rout = () =>{
    return(<>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing/:id" element={<Detail/>}/>
        <Route path="/listing/create" element={<Form/>}/>
        <Route path="/addPet/:id" element={<AddPet/>}/>
        <Route path="/editform/:id" element={<EditForm/>}/>
        <Route path="/login" element={<Main/>}/>
        <Route path="/allPet" element={<AllPets/>}/>
        <Route path="/myPet/:id" element={<MyPet/>}/>
        <Route path="*" element={<PNf/>}/>
        </Routes>
        </>)
}