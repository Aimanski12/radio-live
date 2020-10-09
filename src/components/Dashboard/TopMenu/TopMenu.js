import React from 'react'
import Svg from '../../Svg/Svg'

function TopMenu() {
  return (
    <div className='top-menu'>
      <ul className='content-center'>
        <li className='content-center top-menu-item text-3'>
          <Svg svg='All Hits'/>
          <span>All Hits</span>
        </li>
        <li className='content-center top-menu-item text-3'>
          <Svg svg='News Radio'/>
          <span>News Radio</span>
        </li>
        <li className='content-center top-menu-item text-3'>
          <Svg svg='Sports Radio'/>
          <span>Sports Radio</span>
        </li>
        <li className='content-center top-menu-item text-3'>
          <Svg svg='My Favorites'/>
          <span>My Favorites</span>
        </li>
      </ul>
    </div>
  )
}

export default TopMenu
