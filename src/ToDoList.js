import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => (
  <div>
    {toDoList.map((todo) => (
      <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
    ))}
    <button type="button" style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
  </div>
);

export default ToDoList;
