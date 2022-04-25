import { ADD_Data } from "./action";

const initialState ={
    table:[]
}

export const tableReducer = (store = initialState  , {type, payload}) =>{
       
    switch(type){
        case ADD_Data:
        return {...store , table:payload }

        default : return store
    }
}