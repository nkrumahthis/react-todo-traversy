import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import {v4 as uuid} from 'uuid';

import './App.css';
import AddTodo from './components/AddTodo';


class App extends Component {
  state = {
    todos:[
        {
            id:1,
            title: 'Take out the trash',
            completed: false
        },
        {
            id:2,
            title: 'Dinner with wife',
            completed: false
        },
        {
            id:3,
            title: 'Meeting with boss',
            completed: false
        }
    ]
  }

  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]});
  }

  // add todo
  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }

  render(){
    return ( 
      
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
      </div>
    );
  }
}

export default App;
