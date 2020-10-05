import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'counter',
  initialState: {
    todo: [],
  },
  reducers: {
    add_todo: (state, action) => {
      console.log(action.payload);
      let id = state.todo.length + 1;
      const event = { id, todo: action.payload.todo };
      state.todo.push(event);
    },
  },
});

export const { add_todo } = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;
