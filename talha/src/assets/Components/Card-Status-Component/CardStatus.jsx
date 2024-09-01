import React from 'react';
import './CardStatus.css';

export default function CardStatus({ status = "Available" ,style }) { 
  return (
    <div className='status-Div'>
      <h2 style={style}>{status}</h2>
    </div>
  )
}
