import React, {useRef, useState} from 'react';
import '../App.css';

function ToDo({index, todo, groupToDo, deleteTodo}) {

    let groupx;
    let groupy;
    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    //on first render do this and then on subsequent renders (if something is added, just display generally as below)
    // for (let i = 0; i < Object.size(todo); i++) {
    //     if (groupToDo.group.id === todo.group.group.id) {
    //         return groupx = <div className="itemList">
    //             <div className="item">
    //                 {todo.item}
    //             </div>
    //             <div className="button">
    //                 <button className="delete"
    //                         onClick={() => deleteTodo(index)}>✘</button>
    //             </div>
    //         </div>
    //         //groupy = console.log("group", groupToDo.group.id, "\n todo group", todo.group.group.id);
    //     }
    // }

// Get the size of an object
    const myObj = {}
    var size = Object.size(myObj);
    // groupy = console.log("group", groupToDo.group,
    //     "\n todo group", todo.group.group,
    //     "\n length", todo.group,
    // );
    //groupy = console.log("group", groupToDo.group, "\n todo", todo);
/*    todo.group.map((groupIndex) => (
        if (groupToDo.group === todo.group[groupIndex]) {
        console.log("hello");
        return groupx = <div className="item">
            {todo.group[groupIndex].group}
        </div>
    }));*/
    // for (let i = 0; i < todo.group.length; i++) {
    //     if (groupToDo.group.id === todo.group.group.id) {
    //         console.log("hello");
    //         groupx = <div className="item">
    //             {todo.item}
    //         </div>
    //     }
    // }

    console.log("todo.item", todo);
return (
    <div>
        <div className="todo"
             style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        >
            {groupx}
            {todo}

            <button className="delete"
                    onClick={() => deleteTodo(index)}>✘</button>
        </div>
    </div>
);
}

export default ToDo;