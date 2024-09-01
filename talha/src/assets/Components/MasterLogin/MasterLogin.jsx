import React from 'react'
import './MasterLogin.css'
import InsiderLogo from '../../imgs/Logo2.jpg'
import InputField from '../InputField/InputField'
import Btn from '../Btn/Btn'
import { fontSize, fontWeight, padding } from '@mui/system'

export default function MasterLogin() {
  return (
    <div className='masterLogin-Content'>
       <div className="logo-Div">
        <img src={InsiderLogo} alt=''></img>
       </div>
       <div className="name-Div">
        <h2 >Insider's</h2><h2 style={{color: '#4DAD49'}} >Inventory</h2>
      </div>
      <h1>Administration Login</h1>
      <form action=''>
      <div className='input-Div'>
          <p className='input-para'>Username</p>
          <InputField
            style={{ backgroundColor: '#fff', width: '100%' }}
              type='text'
              placeholder='John Doe'
          />
      </div>
      <div className='input-Div'>
          <p className='input-para'>Password</p>
          <InputField
            style={{ backgroundColor: '#fff', color: '#000000'}}
              type='password'
              placeholder='Enter your password'
              required
          />
      </div>
      <div className='remember-Div'>
      <label><input type='checkbox' className='custom-checkbox' />Remember Me
      </label>
         <a href='#'>Forgot Password?</a>
      </div>
      <Btn text='Sign In ' style={{maxWidth: '140px' , marginLeft: '105px' , height: '35px', padding: '4px'}}/>
      </form>
    </div>
  )
}

