import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import themeSlice from './themeSlice';
import exerciseSlice from './exerciseSlice';
import regimeSlice from './regimeSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: themeSlice,
        exercise: exerciseSlice,
        regime: regimeSlice,
    }
});

export default store;