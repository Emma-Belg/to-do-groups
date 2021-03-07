import React, {useRef, useState} from 'react';
import '../App.css';
//import Todo from "./ToDoList";

function ToDoGroup({index, group, item}) {

    return (
        <div>
            <div className="Group">
                {group.title}
                {/*{index.title}*/}
            </div>
        </div>
    );
}

export default ToDoGroup;