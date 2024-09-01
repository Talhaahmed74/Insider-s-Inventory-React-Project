import React from 'react'
import './InputField.css'
export default function InputField({type, placeholder, label, style}) {
  return (

      <input className='text' 
      type={type} 
      placeholder={placeholder}
      label={label}
      style={{...style}}
      >
      </input>

  )
}
