import React, {useState} from 'react';
import './App.css';
import ToDoGroup from "./components/Groups";
import AddForm from "./components/AddForm";

function App() {
    const [groupList, SetGroupList] = useState([
        {id:0,
            title: "To Do"},
        {id:1,
            title: "Doing"},
        {id:2,
            title: "Done"},
    ]);

    const addGroup = text => {
        const newGroup = [...groupList, {id: groupList.length+1, title: text}];
        SetGroupList(newGroup);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Do This</h1>
          <div className="forms">
              <AddForm addItem={addGroup}
                       placeholder="Add a new group"/>
              <AddForm />
          </div>
      </header>
        <div className="groups">
            {groupList.map((groupName) => (
                <ToDoGroup
                    key={groupName.id}
                    group={groupName}
                />
            ))}
        </div>
    </div>
  );
}

export default App;
