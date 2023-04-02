import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo, all_delete, delete_todo } from './todoSlice';

export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');

  const handleClick = () => {
    dispatch(add_todo({ id: todos.length + 1, todo: event }))
    setEvent('')
  }

  const allDelete = () => {
    dispatch(all_delete());
  };

  const handleDeleteTodo = (id) => {
    dispatch(delete_todo(id));
  };

  return (
    <div>
      <input type="text" value={event} onChange={e => setEvent(e.target.value)} />
      <button
        aria-label="add_todo"
        onClick={handleClick}
      >
        add_todo
      </button>

      <button
        aria-label="all_delete"
        onClick={allDelete}
      >
        all_delete
      </button>

      <ul style={{ textDecoration: 'none' }}>
        {
          todos.map(item => {
            console.log(item)
            return (
              <li key={item.id}>
                {item.id}:{item.todo}
                <button onClick={() => handleDeleteTodo(item.id)}>delete</button>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}
