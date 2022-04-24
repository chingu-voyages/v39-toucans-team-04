import { categoryReducer } from './categoryreducer';
import { difficultyReducer } from './difficultyreducer';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    category: categoryReducer, difficultyReducer
})
const store = createStore(reducers);

export default store;