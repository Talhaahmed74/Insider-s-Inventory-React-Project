import React from 'react';
import './PropertyType.css';
import PropertyPhoto from '../../imgs/Property-Type.png';
export default function PropertyType({
  text = 'Buy & Hold Property',
  description = 'Tailored Retail Spaces for Owner-Occupied Success in Prime Locations.'
}) {
  return (
    <div className='content-Div'>
      <div className="picture-Div">
        <img src={PropertyPhoto} alt='Property' />
      </div>
      <div className="PropertyFeature">
        <h3>{text}</h3>
      </div>
      <div className='PropertyDescription'>
        <p>{description}</p>
      </div>
    </div>
  );
}
