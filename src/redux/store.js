import categoryReducer from './categoryreducer';
import difficultyReducer from './difficultyreducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        category: categoryReducer,
        difficulty: difficultyReducer
    }
})

export default store;