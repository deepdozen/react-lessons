import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos : [
      {id: 1, action: 'buy water'},
      {id: 2, action: 'buy broccoli'},
      {id: 3, action: 'buy cheese'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.floor(Math.random()*1000);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>  
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
