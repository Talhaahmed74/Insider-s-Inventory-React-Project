import React, { useState } from 'react';
import './Nv.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; 
import CloseIcon from '@mui/icons-material/Close';
import Btn from '../Btn/Btn';


const links = [
  {
    id: 1,
    name: 'Home',
    to: '/'
  },
  {
    id: 2,
    name: 'Buyers',
    to: '/'
  },
  {
    id: 3,
    name: 'Sellers',
    to: '/'
  },
  {
    id: 4,
    name: 'Buy & Hold',
    to: '/'
  },
  {
    id: 5,
    name: 'Retail',
    to: '/'
  },
  {
    id: 6,
    name: 'Flip Opportunities',
    to: '/'
  },
  {
    id: 7,
    name: 'Off Market Inventory',
    to: '/'
  }
];

const Nv = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <div className="main-content">
      <div className="logo">
        <p>Insider's</p><p className="second">Inventory</p>
      </div>
      <div className={`nb-links ${menu ? 'active' : ''}`}>
        {
          links.map((item) => (
          <li key={item.id} style={item.id === 1 ? { color: '#4DAD49' } : {}}> {item.name}</li>
          ))
        }
        <div className='nb-btn' id='nb-Mobile'>
          <Btn text="Login/SignUp" />   
        </div>
      </div>     
      <div className='nb-btn' id='nb-Desktop'>
        <Btn text="Login/SignUp" />   
      </div>
      <div className='nb-icon' onClick={toggleMenu}>
        {menu ? <CloseIcon /> : <MenuOutlinedIcon />}
      </div>
    </div>
  );
}

export default Nv;
