import React, {useRef, useState} from 'react';
import '../App.css';

function ToDo({index, todo, groupToDo, deleteTodo}) {



return (
    <div>
        <div className="todo"
             style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        >
            {todo.item}

            <button className="delete"
                    onClick={() => deleteTodo(index)}>✘</button>
        </div>
    </div>
);
}

export default ToDo;