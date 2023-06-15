import './Sidebar.css';
import React from 'react';
import explore from '../../logos/explore.svg';
import logout from '../../logos/logout.svg';
import createpoll from '../../logos/createpoll.svg';



const Sidebar = () => {
  return (
    <div>
      <div className='sidecard'>
        <div className='profili'></div>
        <text style={{
            position: 'fixed',
            top: '106px',
            left: '70px',
            width: '99px',
            height: '19px',
            textAlign: 'left',
            fontFamily: 'poppins',
            fontWeight:'600',
            letterSpacing: '0px',
            color: '#1A2552',
            opacity: 1,
            whiteSpace:'nowrap'
          }}>Mahdi Bouden</text>
          <text style={{
            position: 'fixed',
            top: '127px',
            left: '70px',
            width: '36px',
            height: '16px',
            textAlign: 'left',
            fontFamily: 'poppins',
            fontWeight:'600',
            fontSize:'12px',
            letterSpacing: '0px',
            color: '#8d92a9',
            opacity: 1,
            whiteSpace:'nowrap'
          }}>11mah</text>

        <div className='placi'></div>
        <text style={{
            position: 'fixed',
            top: '261px',
            left: '70px',
            width: '99px',
            height: '19px',
            textAlign: 'left',
            fontFamily: 'poppins',
            fontWeight:'600',
            letterSpacing: '0px',
            color: '#1A2552',
            opacity: 1,
            whiteSpace:'nowrap'
          }}>Place a pool</text>

        <div className='explori'></div>
        <text style={{
            position: 'fixed',
            top: '186px',
            left: '70px',
            width: '99px',
            height: '19px',
            textAlign: 'left',
            fontFamily: 'poppins',
            fontWeight:'600',
            letterSpacing: '0px',
            color: '#1A2552',
            opacity: 1,
            whiteSpace:'nowrap'
          }}>Explore</text>

        <div className='line'>
          <text style={{

          }}></text>
        </div>

        <div className='logouti'></div>
        <text style={{
            position: 'fixed',
            top: '354px',
            left: '70px',
            width: '99px',
            height: '19px',
            textAlign: 'left',
            fontFamily: 'poppins',
            fontWeight:'600',
            letterSpacing: '0px',
            color: '#1A2552',
            opacity: 1,
            whiteSpace:'nowrap'
          }}>Log out</text>

      </div>
      <div className="profilo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <circle id="_1" data-name="1" cx="20" cy="20" r="20" fill="#1a2552" />
        </svg>
      </div>
      <img src={explore} alt='explore' className='exp'/>
      <img src={createpoll} alt='createpoll' className='createpoll'/>
      <img src={logout} alt='logout' className='logout'/>



    </div>
  );
};

export default Sidebar;
