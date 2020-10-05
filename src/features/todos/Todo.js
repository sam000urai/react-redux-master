import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo, selectTodo } from './todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const values = useSelector(selectTodo);
  const [todo, setTodo] = useState({});
  const addTodo = () => {
    const event = { todo };
    dispatch(add_todo(event));
  };

  return (
    <div>
      <input
        type="text"
        value={todo.todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>add_todo</button>
      {values.todo.map((value, index) => {
        return (
          <ul key={index}>
            <li>
              TODOLIST[{value.id}] : {value.todo}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;
