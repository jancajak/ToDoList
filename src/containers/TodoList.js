import React from 'react';
import Todo from './Todo';

const TodoList = ({items, deleteItem}) => {
  return (
    <div>
      {
        items.map((item, i) => {
          return (
            <div key={i}>
              <Todo
                deleteItem={deleteItem}
                key={i}
                id={i}
                content={items[i]}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default TodoList;
