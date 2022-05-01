import { createSlice } from "@reduxjs/toolkit"

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        value: '0'
    },

    reducers: {
        updateCategory: (state, action) => {
            state.value = action.payload
            return state
        }
    }
});

export const { updateCategory } = categorySlice.actions

export default categorySlice.reducer;