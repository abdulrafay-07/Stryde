import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'system';
}

const initialState = {
    theme: getInitialTheme()
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;