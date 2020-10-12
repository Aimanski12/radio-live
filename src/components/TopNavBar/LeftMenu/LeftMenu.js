import React, {Fragment} from 'react'
import {showMenu} from '../../../utils/common/helpers'

function Genre() {
  return (
    <div className="left-menu">
      <div className="content-center close-btn">
        <img 
          onClick={()=>showMenu('left')}
          src="/images/close.svg" alt="close icon"/>
      </div>
      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <img src="/images/Globe.svg" alt=""/>
          <span className='font-2'>Seach by Continent</span>
        </div>
        <ul className='menu-items'>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>Africa</span>
            <span className='menu-station font-8'>3,258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>Asia</span>
            <span className='menu-station font-8'>3,258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>Australia</span>
            <span className='menu-station font-8'>258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>Europe</span>
            <span className='menu-station font-8'>2,987</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>North America</span>
            <span className='menu-station font-8'>3,207</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name font-5'>South America</span>
            <span className='menu-station font-8'>858</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <img 
            onClick={()=>showMenu('')}
            src="/images/Genre.svg" alt="close icon"/>
          <span className='font-2'>Seach by Genre</span>
        </div>
        <ul className='menu-items'>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Pop.svg" alt=""/>
              Pop
            </span>
            <span className='menu-station font-8'>2,168</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Classical.svg" alt=""/>
              Classical
            </span>
            <span className='menu-station font-8'>889</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Jazz.svg" alt=""/>
              Jazz
            </span>
            <span className='menu-station font-8'>570</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Country.svg" alt=""/>
              Country
            </span>
            <span className='menu-station font-8'>441</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Electronic.svg" alt=""/>
              Electronic
            </span>
            <span className='menu-station font-8'>441</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Hiphop.svg" alt=""/>
              Hiphop
            </span>
            <span className='menu-station font-8'>284</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Indie.svg" alt=""/>
              Indie
            </span>
            <span className='menu-station font-8'>245</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Reggae.svg" alt=""/>
              Reggae
            </span>
            <span className='menu-station font-8'>156</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img src="/images/Blues.svg" alt=""/>
              Blues
            </span>
            <span className='menu-station font-8'>149</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Genre
