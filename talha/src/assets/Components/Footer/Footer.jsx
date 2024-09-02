import React from 'react';
import './Footer.css';
import footerImg from '../../imgs/footer-image.png';
import InputField from '../InputField/InputField';
import Btn from '../Btn/Btn';
import Grid from '@mui/material/Grid'; 
import LowerFooter from '../Lower-Footer/LowerFooter'

export default function Footer() {
   return (
    <div className='footer'>
    <div className="footer-upper footer-building-margin">
        <Grid container spacing={5}>
            <Grid item xs={4}>
            <img src={footerImg} alt="building-img" className='footer-building' />
            </Grid>
            <Grid item sm={8} xs={12}>
               <div className='footer-upper-right'>
                  <div className="footer-heaing">Signup for the Latest Deals</div>
                  <div className="footer-text">By joining our mailing list, you'll receive the latest updates and opportunities in investment properties directly to your inbox.</div>
                  <div style={{ width: '100%' }} >
                     <Grid container spacing={2}>
                       <Grid item sm={6} xs={12}>
                        <InputField
                            placeholder='First Name'
                         />
                         </Grid>
                        <Grid item sm={6} xs={12}>
                           <InputField
                             placeholder='Last Name'
                           />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                           <InputField
                            placeholder='Email'
                           />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <InputField
                            placeholder='Phone Number'
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <Btn
                        text='Sign up for the Latest Deals'
                    />
                   </div>
                </Grid>
              </Grid>
         </div>
               <div className="footer-lower">
                <LowerFooter/>
              </div>
        </div>
);
}