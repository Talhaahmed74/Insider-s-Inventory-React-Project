import React from 'react'
import './SocialLinks.css'
import fbLogo from '../../imgs/FB-logo.png'
import instaLogo from '../../imgs/Instagram-logo.png'
import linkdlnLogo from '../../imgs/LinkdIn-logo.png'
import twitterLogo from '../../imgs/Twitter-logo.png'
export default function SocialLinks() {
  return (
    <div className='Links'>
      <img src={fbLogo} alt="Facebook" />
      <img src={twitterLogo} alt="Twitter" />
      <img src={linkdlnLogo} alt="LinkedIn" />
      <img src={instaLogo} alt="Instagram" />
    </div>
  )
}
