import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: v4(),
                title: action.payload,
                completed: false
            };

            state.todos.push(newTodo)
        },

        removeTodo: (state, action) => {
            state.todos.splice(action.payload.id, 1);
        },

        todoCompleted: (state, action) => {
            console.log(action.payload);

            state.todos[action.payload].completed = !state.todos[action.payload].completed;


            /*  return state.todos.map((todo) =>
                 todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
             ); */
        },

    }
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, todoCompleted } = todoSlice.actions;
