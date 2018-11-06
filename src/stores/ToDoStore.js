import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.oldTodos = [];
    this.oldNewTodo = '';
    this.todos = {
      actual: [],
      newTodo: ''
    };
  }

  onTextChange(text) {
    this.oldNewTodo = text;
    this.todos.newTodo = text;
  }

  deleteItem(id) {
    this.oldTodos.splice(id, 1);
    this.emit('change');
  }

  addItem(item) {
    this.oldTodos.push(item)
    this.emit('change');
  }

  getAll() {
    return this.oldTodos
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_ITEM':
        this.addItem(action.item)
        break;
      case 'DELETE_ITEM':
        this.deleteItem(action.id)
        break;
      case 'TEXT_CHANGE':
        this.onTextChange(action.event)
        break;
      default: {
        console.log('Error');
      }

    }
  }
}


const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
