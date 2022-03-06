import React from 'react';
//importing react icons 
import { FaEdit, FaTrash } from 'react-icons/fa';

// items operations
const List = ({ items, removeItem, editItem }) => {
  return (
    // looping over the items
    <div className='grocery-list'>
      {items.map((item) => {
        // de constructing id and item
        const { id, title } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                // onclick event calls editItem
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                // onclick event calls removeItem
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
