import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TaskComponent from './Components/TaskComponent';

function App() {
  return (
    
    <>
    <div className="container px-3 py-5">
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
      <TaskComponent></TaskComponent>
    </div>
    </>
  );
}

export default App;
