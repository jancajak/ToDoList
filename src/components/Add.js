import React from 'react';

const Add = ({ addItem, onTextChange, handleEnter, input }) => {
  return (
    <div>
      <input onKeyPress={handleEnter} onChange={onTextChange} type='text' placeholder='Type your todos' className='f3 mr2 br4 pa3'/>
      <div onClick={addItem} className='f3 tc mt4 dib fc w-10 white grow pointer bg-green br4 shadow-5'>
        <p>Add Item</p>
      </div>
    </div>
  );
}

export default Add;
