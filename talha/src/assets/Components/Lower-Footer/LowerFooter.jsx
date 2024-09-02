import React from 'react';
import './LowerFooter.css';
import logo from '../../imgs/logo.png';
import List from '../List/List';
import SocialLinks from '../Social Links/SocialLinks';

export default function LowerFooter() {
  return (
    <div className="lower-Footer">
      <div className='footer-Logo-Div'>
        <img src={logo} alt='' className='logo-Img'></img>
      </div>
      <div className='companyName-Div'>
        <p>Insider's<p className='second-Text'>  Inventory</p></p>
      </div>
      <div className='slogan-Div'>
        Your gateway to Real Estate Excellence.
      </div>
      <div className='list-Div'>
        <List/>
      </div>
      <div className='socialLinks-Div'>
        <SocialLinks/>
      </div>
      <hr />
      <div className='footer-Copyrights'>
        Copyright Insider’s Inventory 2024. All rights reserved.
      </div>
    </div>
  );
}
