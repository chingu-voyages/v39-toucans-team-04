import { categoryReducer } from './categoryreducer';
import { difficultyReducer } from './difficultyreducer';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    category: categoryReducer,
    difficulty: difficultyReducer
})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;