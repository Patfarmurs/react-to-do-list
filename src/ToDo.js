/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div>
      <button type="button" id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? 'todo strike' : 'todo'}>
        {todo.task}
      </button>
    </div>
  );
};

export default ToDo;
