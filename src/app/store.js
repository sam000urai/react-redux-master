import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import fetchReducer from '../features/fetch/fetchSlice';
import getTodoReducer from '../features/getTodo/getTodoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    fetch: fetchReducer,
    getTodo: getTodoReducer,
  },
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    fetch: fetchReducer,
    getTodo: getTodoReducer,
  },
});