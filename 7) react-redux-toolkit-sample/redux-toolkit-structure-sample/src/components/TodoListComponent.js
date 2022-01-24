import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, todoCompleted } from '../store/features/todo/todoSlice'

function TodoListComponent() {

    const todolist = useSelector(state => state.todoReducer.todos);
    const theme = useSelector((state)=> state.themeReducer.value)
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(removeTodo({ id }));
    }

    return <div style={{color:theme}}>
        <h1>Todo List</h1>

        {/*         {todolist.map((todo, index) => console.log(index + " = " + todo.id + " = " + todo.completed ))}*/}
        <ul> {todolist.map((todo, index) => <li key={index}>
            <span>{todo.title}</span>--
            <span>{String(todo.completed)}</span>--
            <button onClick={() => onDelete(index)}>Delete</button>
            <button onClick={() => { dispatch(todoCompleted(index)) }}>{String(todo.completed) === "false" ? "In Progress" : "Completed"}</button>
        </li>
        )}</ul>

    </div>
}

export default TodoListComponent;
