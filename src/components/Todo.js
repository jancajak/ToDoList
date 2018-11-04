import React from 'react';
import remove from './remove2.png';

const Todo = ({content, id, deleteItem}) => {
  return (
    <div
      className="dt center f2 tc fc w-50 pv2 mt4 bg-light-blue dib br4 shadow-5 pointer hide-child">
      <p className="dtc pl4 w-10 mr1 v-mid">{id+1}.</p>
      <p className='dtc fc center w-80 v-mid' id={id}>{content}</p>
      <div onClick={deleteItem} className='dtc child mr2 mt3 w-10 v-center v-mid'>
        <img alt='close' className='h3 grow' src={remove} />
      </div>
    </div>
  )
}

export default Todo;
