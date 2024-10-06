import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './counterSlice';
import { todos } from './todoReducer';
export const store = configureStore({
    reducer: {  
      counter: counterSlice,
      todos: todos
    },
})