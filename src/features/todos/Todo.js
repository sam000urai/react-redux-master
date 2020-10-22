import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo, selectTodo, all_delete_todo, clear_todo } from './todoSlice';

const Todo = () => {
  const dispatch = useDispatch();
  const values = useSelector(selectTodo);
  const [todo, setTodo] = useState({});

  const addTodo = () => {
    const event = { todo };
    dispatch(add_todo(event));
  };
  const addDelete = () => {
    dispatch(all_delete_todo());
  };
  const addClear = () => {
    dispatch(clear_todo());

  };

  return (
    <div>
      <input
        type="text"
        value={todo.todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>add_todo</button>
      <button onClick={addDelete}>add_delete</button>
      {values.todo.map((value, index) => {
        return (
          <ul key={index}>
            <li>
              TODOLIST[{value.id}] : {value.todo} | <button onClick={addClear}>delete</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;
