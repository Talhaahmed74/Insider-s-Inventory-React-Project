import React from 'react';
import './Footer.css';
import footerImg from '../../imgs/footer-image.png';
import InputField from '../InputField/InputField';
import Btn from '../Btn/Btn';
import Grid from '@mui/material/Grid'; 
import LowerFooter from '../Lower-Footer/LowerFooter';

export default function Footer() {
  return (
    <div className='footer-Content'>
   <div className="footer-building-margin"></div> 
   <img src={footerImg} alt='' className='building' />
      <div className="upper-Footer">
        <Grid container spacing={6} >
          <Grid item xs={2} sm={4}>

          </Grid>
          <Grid item xs={10} sm={8}>
            <div className='upper-Footer-Signup'>
              <div className='heading'>Signup for the Latest Deal</div>
              <div className='footer-Text'>
                By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder='First Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder='Last Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder='Email' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder='Phone Number' />
                </Grid>
              </Grid>
              <div className='btn-Div'>
                <Btn text='Sign Up for the latest Deals' />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <LowerFooter/>  
    </div>
  );
}