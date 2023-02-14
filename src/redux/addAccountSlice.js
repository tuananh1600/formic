import { createSlice } from "@reduxjs/toolkit";

const addAccountSlice = createSlice({
    name : "todo" ,
    initialState : {
        listAccount : []
    },
    reducers : {
        addAccount : (state,action) =>{
            state.listAccount.push(action.payload);
        }
    }
})
export default addAccountSlice