import { createSlice } from "@reduxjs/toolkit";
import { english } from "../dictionary/dictionary";

const initialStateValue = localStorage.lang ? JSON.parse(localStorage.lang) : english

export const languageSlice = createSlice({
    name: 'language',
    initialState :{value:initialStateValue},
    reducers:{
        changeLanguage:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer