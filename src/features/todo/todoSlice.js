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
      console.log(event)
      state.value.push(event)
      // state.value = [...state.value, ...event]
    },

    all_delete: (state) => {
      state.value = [];
    },

    delete_todo: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((todo) => todo.id !== id);
    },
  }
});

export const { add_todo, all_delete, delete_todo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
