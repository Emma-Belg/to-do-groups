import React, {useState}from 'react';
import '../App.css';
import ToDo from "./ToDoList";
import AddForm from "./AddForm";

function ToDoGroup({group, item}) {

    const [todos, setTodos] = useState([
        {
            id: 0,
            item: 'Learn about hooks',
            group: {group},
        },
        {
            id: 1,
            item: 'Meet friend for lunch',
            group: {group},
        },
        {
            id: 2,
            item: 'Build cool app',
            group: {group},
        }
    ]);

    const addToDoItem = text => {
        const newGroup = [...todos, {id: todos.length+1, item: text, group: group.group}];
        console.log({...todos})
        setTodos(newGroup);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="Group">
                <h2>{group.group}</h2>
                <AddForm addItem={addToDoItem}
                         placeholder="Add a new to do item"/>
                <div className="todo-list">
                    {todos.group &&
                       <p>test</p>
                    // <ToDo
                    //     key={todos.id}
                    //     todo={todos.item}
                    //     item={group.group}
                    // />
                    }
                    {todos.map((todo) => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            groupToDo={todo.group}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToDoGroup;