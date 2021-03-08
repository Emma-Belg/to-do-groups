import React, {useState} from 'react';
import './App.css';
import ToDoGroup from "./components/Groups";
import AddForm from "./components/AddForm";

function App() {
    const [groupList, SetGroupList] = useState([
        {   id:0,
            group: "To Do"},
        {   id:1,
            group: "Doing"},
        {   id:2,
            group: "Done"},
    ]);

    {groupList.map((groupName) => (
       console.log(groupName.group)
    ))}

    const addGroup = text => {
        const newGroup = [...groupList, {id: groupList.length+1, group: text}];
        SetGroupList(newGroup);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Do This</h1>
          <div className="forms">
              <AddForm addItem={addGroup}
                       placeholder="Add a new group"/>
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
