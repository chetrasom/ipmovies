import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: {},        // baseUrl
    genres: {},
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export const selectorHome = (state) => state.home;

export default homeSlice.reducer;