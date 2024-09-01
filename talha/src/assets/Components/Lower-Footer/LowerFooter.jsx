import React from 'react';
import './LowerFooter.css';
import Grid from '@mui/material/Grid'; 
import logo from '../../imgs/logo.png';
import List from '../List/List';
import SocialLinks from '../Social Links/SocialLinks';

export default function LowerFooter() {
  return (
    <div className="lower-Footer">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <img src={logo} alt='' className='footer-Logo' />
          <div className='slogan-Div'>Your Gateway to Real Estate Excellence</div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <List />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="social-links-wrapper">
            <SocialLinks />
          </div>
        </Grid>
      </Grid>
      <hr />
      <div className='footer-Copyrights'>
        Copyright Insider’s Inventory 2024. All rights reserved.
      </div>
    </div>
  );
}
