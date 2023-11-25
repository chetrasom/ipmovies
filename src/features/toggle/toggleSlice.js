import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearchBox: false,
    isMenuBox: false,
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        openSearchBox: (state) => {
            state.isSearchBox = true,
            state.isMenuBox = false
        },
        closeSearchBox: (state) => {
            state.isSearchBox = false
        },
        openMenuBox: (state) => {
            state.isMenuBox = true,
            state.isSearchBox = false
        },
        closeMenuBox: (state) => {
            state.isMenuBox = false
        }
    },
});

export const { openSearchBox, closeSearchBox, openMenuBox, closeMenuBox } = toggleSlice.actions;

export const selectorToggle = (state) => state.toggle;

export default toggleSlice.reducer;