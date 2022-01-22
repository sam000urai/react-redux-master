import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';







const initialState = {
  data: [],
};

export const getTodoData = createAsyncThunk('fetch/getTodoData', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data;
});

const getTodoSlice = createSlice({
  name: 'getTodo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});



export const selectGetTodoData = (state) => state.getTodo.data;
export default getTodoSlice.reducer;