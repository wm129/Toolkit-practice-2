import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    todos: todoReducer,
});

const store = configureStore( { reducer });
export type RootState = ReturnType<typeof reducer>;
export default store;