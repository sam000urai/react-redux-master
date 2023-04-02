import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    todos: [],
};

export const fetchTodos = createAsyncThunk('getTodo/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
});

const getTodoSlice = createSlice({
    name: 'getTodo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
    },
});

export const selectTodos = (state) => state.getTodo.todos;
export default getTodoSlice.reducer;
