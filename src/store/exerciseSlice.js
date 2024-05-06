import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exerciseData: []
}

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.exerciseData.push(action.payload);
        }
    }
})

export const { fetchData } = exerciseSlice.actions;

export default exerciseSlice.reducer;