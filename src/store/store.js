import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import themeSlice from './themeSlice';
import exerciseSlice from './exerciseSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: themeSlice,
        exercise: exerciseSlice,
    }
});

export default store;