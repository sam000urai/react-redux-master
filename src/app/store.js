import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import fetchReducer from '../features/fetch/fetchSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    fetch: fetchReducer,
  },
});
