import React from 'react';
import TodoList from '../components/TodoList';
import Add from '../components/Add.js';

import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/ToDoStore';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.addItem();
    }
  }

  onTextChange = (event) => {
    this.setState({addTodo: event.target.value});
  }

  addItem = () => {
    TodoActions.addItem(this.state.addTodo);
    // let todos = this.state.todos.slice();
    // const todo = this.state.addTodo;sud
    //
    // if (todo) {
    //   todos.push(todo);
    //   this.setState({todos: todos});
    // } else {
    //   this.setState({todos:todos});
    // }
  }

  deleteItem = (event) => {
    TodoActions.deleteItem(event.target.id);

    // let todos = this.state.todos.slice();
    // todos.splice(event.target.id, 1);
    // this.setState({todos: todos})

  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1 f1-l fw2 tc fl w-100 lh-title dib">Your's todo list</h1>
        <Add
          addItem={this.addItem}
          handleEnter={this.handleEnter}
          onTextChange={this.onTextChange}
        />
        <TodoList
          deleteItem={this.deleteItem}
          items={this.state.todos}
        />

      </div>
    )
  }
}

export default App;
