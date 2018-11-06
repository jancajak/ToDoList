import dispatcher from '../dispatcher';

export function addItem(item) {
  dispatcher.dispatch({
    type: 'ADD_ITEM',
    item
  })
}

export function deleteItem(id) {
  dispatcher.dispatch({
    type: 'DELETE_ITEM',
    id
  })
}

export function handleEnter(event) {
  dispatcher.dispatch({
    type: 'HANDLE_ENTER',
    event
  })
}

export function onTextChange(event) {
  dispatcher.dispatch({
    type: 'TEXT_CHANGE',
    event
  })
}
