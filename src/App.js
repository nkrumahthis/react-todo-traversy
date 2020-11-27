import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';


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
            completed: true
        },
        {
            id:3,
            title: 'Meeting with boss',
            completed: false
        }
    ]
}

render(){
  console.log(this.state.todos);
  return ( 
    
    <div className="App">
      <h1>Todo App</h1>
      <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
