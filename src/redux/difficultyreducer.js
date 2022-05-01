import { createSlice } from "@reduxjs/toolkit"

export const difficultySlice = createSlice({
    name: 'difficulty',
    initialState: {
        value: 'easy'
    },

    reducers: {
        updateDifficulty: (state, action) => {
            state.value = action.payload
            return state
        }
    }
});

export const { updateDifficulty } = difficultySlice.actions

export default difficultySlice.reducer;