import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add_todo: (state, action) => {
      const event = action.payload
      state.value = [...state.value, ...event]
    }
  }
});

export const { add_todo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
