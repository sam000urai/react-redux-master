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
      state.value = []
    },
    point_delete: (state) => {
      const point = state.filter(state => state.id === 9999);
      return point
    }

  }
});




export const { add_todo, all_delete, point_delete } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
