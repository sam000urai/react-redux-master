import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Todo } from './features/todo/Todo';
import './App.css';

import { fetchData, selectData } from './features/fetch/fetchSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line
  }, []);
  const fetchUserData = async () => {
    await dispatch(fetchData());
  };
  console.log(data);





  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
