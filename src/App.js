import React, {useState} from 'react';
import './App.css';
import ToDoGroup from "./components/Groups";

function App() {
    const [groupList, SetGroupList] = useState([
        {title: "To Do"},
        {title: "Doing"},
        {title: "Done"},
    ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Do This</h1>
      </header>
        {groupList.map((index, groupList) => (
            <ToDoGroup
                // key={index}
                // index={index}
                group={groupList}
            />
        ))}
    </div>
  );
}

export default App;
