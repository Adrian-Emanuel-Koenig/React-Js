import React from 'react';
import "./itemListContainer.css";
import Gibson from './Guitar';

export default function ItemListContainer({ greeting }) {
  return (
    <div className='itemList--container'>
      {greeting}
    <Gibson/>
    </div>
  );
};