import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regimeData: null
}

const regimeSlice = createSlice({
    name: 'regime',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.regimeData = action.payload;
        }
    }
})

export const { fetchData } = regimeSlice.actions;

export default regimeSlice.reducer;