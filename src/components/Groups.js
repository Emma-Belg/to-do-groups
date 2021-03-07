import React from 'react';
import '../App.css';
//import Todo from "./ToDoList";

function ToDoGroup({index, group, item}) {

    return (
        <div>
            <div className="Group">
                <h2>{group.title}</h2>
            </div>
        </div>
    );
}

export default ToDoGroup;