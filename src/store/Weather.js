import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = ''

export const weatherSlice = createSlice({
    name: "weather",
    initialState: { value: initialStateValue },
    reducers: {
        getWeatherData: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { getWeatherData } = weatherSlice.actions
export default weatherSlice.reducer