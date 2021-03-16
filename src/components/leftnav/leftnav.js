import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaThLarge } from 'react-icons/fa';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const LeftNav = (props) => {
  return (
    <div className='sidebar'>
      <div className='leftNav sidbar-sticky'>
        <ul>
          <NavLink exact to='/'>
            <li className='item-menu navbrand-img'>
              <img alt='' src={require('../../assets/yfu/anime-limited.png')} />
            </li>
          </NavLink>

          <NavLink exact to='/routeX'>
            <li className='item-menu'>
              <img
                alt=''
                src={require('../../assets/yfu/yfu-white.png')}
                width='45'
              />
              <span className='menu'>YFU TOKEN</span>
            </li>
          </NavLink>

          <NavLink exact to='/nft'>
            <li className='item-menu'>
              <img
                alt=''
                src={require('../../assets/yfu/ln-compass-white.png')}
                width='45'
              />
              <span className='menu'>OUR NFTs</span>
            </li>
          </NavLink>

          <NavLink exact to='/hives'>
            <li className='item-menu'>
              <img
                alt=''
                src={require('../../assets/yfu/ln-corn-white.png')}
                width='45'
              />
              <span className='menu'>POOLS</span>
            </li>
          </NavLink>

          <NavLink exact to='/faq'>
            <li className='item-menu'>
              <img
                alt=''
                src={require('../../assets/yfu/ln-faq-white.png')}
                width='45'
              />
              <span className='menu'>FAQ</span>
            </li>
          </NavLink>

          <NavLink exact to='/routeX'>
            <li className='item-menu'>
              <img
                alt=''
                src={require('../../assets/yfu/ln-resources-white.png')}
                width='45'
              />
              <span className='menu'>RESOURCES</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
