import categoryReducer from './categoryreducer';
import difficultyReducer from './difficultyreducer';
import { configureStore } from '@reduxjs/toolkit';

import { combineReducers, compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer: {
        category: categoryReducer,
        difficulty: difficultyReducer
    }
})

export default store;