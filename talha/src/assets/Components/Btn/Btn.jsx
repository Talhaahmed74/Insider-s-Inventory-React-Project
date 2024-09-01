import React from 'react'
import './Btn.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function Btn({text, style, onClick})
{
  return (
    <div >
      <button  className='nb-Btn' style={{...style}} onClick={onClick}>{text}<CallMadeIcon id='arrowBtn'/></button>
    </div>
  ) 
}



