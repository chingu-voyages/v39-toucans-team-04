import { categoryReducer } from './categoryreducer';
import { difficultyReducer } from './difficultyreducer';
import { configureStore } from 'redux';

const store = configureStore({
    category  : categoryReducer,
    difficulty: difficultyReducer
});

export default store;