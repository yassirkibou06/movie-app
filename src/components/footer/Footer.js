import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

import imgF from '../../assets/wallpaperflare.com_wallpaper.jpg';

function Footer() {
  return (

    <div className='footer' style={{ backgroundImage: `url(${imgF})` }}>

      <div className='logo'>
        <Link to='/'><span>M</span>show</Link>
      </div>
      <div className='footer-contact-menus'>
        <div className='footer-contact-menu'>
          <Link to='/'>Home</Link>
          <Link to='/'>Contact us</Link>
        </div>
        <div className='footer-contact-menu'>
          <Link to='/'>Live</Link>
          <Link to='/'>Premium</Link>
        </div>
        <div className='footer-contact-menu'>
          <Link to='/'>Term of services</Link>
          <Link to='/'>About us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer