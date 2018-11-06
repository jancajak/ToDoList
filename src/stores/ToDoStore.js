import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = {
      actual: [],
      newTodo: '',
      defaultValue: ''
    };
  }

  onTextChange(text) {
    this.todos.newTodo = text;
  }

  deleteItem(id) {
    this.todos.actual.splice(id, 1);
    this.emit('change');
  }

  addItem(item) {
    this.todos.actual.push(item)
    this.emit('change');
  }

  handleEnter(key) {
    if(key === 'Enter') {
      this.todos.actual.push(this.todos.newTodo);
      this.emit('change');
    }
  }

  getAll() {
    return this.todos
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_ITEM':
        this.addItem(action.item);
        break;
      case 'DELETE_ITEM':
        this.deleteItem(action.id);
        break;
      case 'TEXT_CHANGE':
        this.onTextChange(action.event);
        break;
      case 'HANDLE_ENTER':
        this.handleEnter(action.event);
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
