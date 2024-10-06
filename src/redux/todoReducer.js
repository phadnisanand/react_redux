import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allTodos = [...state.allTodos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.allTodos = state.allTodos.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTodo: (state, action) => {
      state.allTodos = state.allTodos.filter((item) =>
        item.id === action.payload.id ? (item.todo = action.payload.todo) : item
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export const todos = todoSlice.reducer;
