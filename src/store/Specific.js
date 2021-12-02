import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ''

export const specificSlice = createSlice({
    name: 'spesific',
    initialState :{value:initialStateValue},
    reducers:{
        getSpecific:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { getSpecific } = specificSlice.actions
export default specificSlice.reducer