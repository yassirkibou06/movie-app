import React from 'react';
import './page-header.scss';

import imgF from '../../assets/wallpaperflare.com_wallpaper.jpg';

const PageHeader = props => {
  return (
    <div className='page-header' style={{ backgroundImage: `url(${imgF})` }}>
        <h2>{props.children}</h2>
    </div>
  )
}


export default PageHeader