import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.data.push(action.payload);
        }
    }
})

export const { fetchData } = exerciseSlice.actions;

export default exerciseSlice.reducer;