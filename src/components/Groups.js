import React, {useState}from 'react';
import '../App.css';
import ToDo from "./ToDoList";
import AddForm from "./AddForm";

function ToDoGroup({group, item}) {

    const [todos, setTodos] = useState([
        {
            id: 0,
            item: 'Learn about hooks',
            group: "Done",
        },
        {
            id: 1,
            item: 'Read book',
            group: "Doing",
        },
        {
            id: 2,
            item: 'Build cool app',
            group: "To Do",
        }
    ]);

    const addToDoItem = text => {
        const newGroup = [...todos, {id: todos.length, item: text, group: group.group}];
        console.log("...todos", ...todos);
        console.log("newGroup", newGroup);
        setTodos(newGroup);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i].group, group.group);
        if (todos[i].group === group.group) {
            console.log("if is true", todos[i].item);
            return <div className="Group">
                <h2>{group.group}</h2>
                <AddForm addItem={addToDoItem}
                         placeholder="Add a new to do item"/>
                <ToDo
                    todo={todos[i].item}
                    deleteTodo={deleteTodo}
                    groupToDo={todos[i].group}
                />
            </div>

        }
    }

    return (
        <div>
            {/*<div className="Group">*/}
            {/*    <h2>{group.group}</h2>*/}
            {/*    <AddForm addItem={addToDoItem}*/}
            {/*             placeholder="Add a new to do item"/>*/}
            {/*    <div className="todo-list">*/}
            {/*        {todos.group &&*/}
            {/*           <p>test</p>*/}
            {/*        // <ToDo*/}
            {/*        //     key={todos.id}*/}
            {/*        //     todo={todos.item}*/}
            {/*        //     item={group.group}*/}
            {/*        // />*/}
            {/*        }*/}
            {/*        {todos.map((todo) => (*/}
            {/*            <ToDo*/}
            {/*                key={todo.id}*/}
            {/*                todo={todo}*/}
            {/*                deleteTodo={deleteTodo}*/}
            {/*                groupToDo={todo.group}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default ToDoGroup;