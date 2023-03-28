import React, { useState } from 'react';
// mock data
import data from './data.json';
// components
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    const mapped = toDoList.map((task) => (task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task }));
    setToDoList(mapped);
  };

  const handleFilter = () => {
    const filtered = toDoList.filter((task) => !task.complete);
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
