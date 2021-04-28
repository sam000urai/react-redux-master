import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo } from './todoSlice';

export function Todo() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [event, setEvent] = useState('');
  const handleClick = () => {
    dispatch(add_todo({ id: todos.length + 1, todo: event }))
  }
  return (
    <div>
      <input type="text" onChange={e => setEvent(e.target.value)}/>
        <button
          aria-label="add_todo"
          onClick={handleClick}
        >
        add_todo
        </button>
      <ul>
      {
        todos.map(item => {console.log(item)
          return (
              <li>{item.id}: {item.todo}</li>
            
          )
        })
      }
        </ul>
    </div>
  );
}
