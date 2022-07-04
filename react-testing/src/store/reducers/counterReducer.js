import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

//на экспорт actions
export const { increment, decrement } = counterSlice.actions

//основной экспорт это сам reducer
export default counterSlice.reducer