import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGetTodoData } from './getTodoSlice';

export function GetTodo() {

  const getTodo = useSelector(selectGetTodoData);
  const dispatch = useDispatch();


  return (


    <div>
      {getTodo.map(item => {

        return (
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>

        )
      })
      }
    </div>






  )





}