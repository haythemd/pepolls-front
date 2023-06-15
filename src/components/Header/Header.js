import './Header.css';
import React from 'react';
import logo from '../../logos/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerCard'>
        <img src={logo} alt='logo' className='logo'/>

      </div>
    </div>
  );
};

export default Header;
