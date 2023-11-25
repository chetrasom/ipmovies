import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice';
import toggleReducer from '../features/toggle/toggleSlice';

export const store = configureStore({
    reducer: {
        home: homeReducer,
        toggle: toggleReducer,
    },
});