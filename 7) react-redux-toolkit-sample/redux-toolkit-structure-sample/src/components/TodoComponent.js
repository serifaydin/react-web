import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/features/todo/todoSlice'

function TodoComponent() {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const TodoAdded = () => {
        dispatch(addTodo(title));
        setTitle("");
    }

    return <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={TodoAdded}>Added Todo</button>
    </div>;
}

export default TodoComponent;