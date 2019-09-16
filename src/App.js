import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {

  myTasks = [
    {done: true, text:'Record a ReactJS video'},
    {done: false, text:'Go for a work'},
  ]

  render() {
    return (
      <ToDoList title="My Stuff" tasks={this.myTasks}/>
    )
  }
}

export default App;
