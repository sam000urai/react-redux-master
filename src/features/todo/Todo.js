import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo, add_todo, all_delete, point_delete } from './todoSlice';

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




  return (
    <div>
      <input type="text" value={event} onChange={e => setEvent(e.target.value)} />
      <button
        aria-label="add_todo"
        onClick={handleClick}
      >
        add_todo
        </button>
      <button onClick={allDelete} >
        ALL_DELETE
      </button>


      <ul style={{ textDecoration: 'none' }}>
        {todos.map(item => {
          console.log(item)
          const pointDelete = () => {
            dispatch(point_delete(item.id))
          }
          return (
            <li>{item.id}:{item.todo}<button onClick={pointDelete}>削除</button></li>

          )
        })
        }
      </ul>
    </div>
  );
}
