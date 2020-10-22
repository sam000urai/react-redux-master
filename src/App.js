import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todo from './features/todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData } from './features/fetch/fetchSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    await dispatch(fetchData());
  };

  console.log(data);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Todo />
      </header>
    </div>
  );
}

export default App;
