import React, {Fragment} from 'react'
import {showMenu} from '../../../utils/common/helpers'

function Categories() {
  return (
    <Fragment>
      <div className="right-menu">

        <div className="content-center close-btn">
          <img 
          onClick={()=>showMenu('right')}
            src="/images/close.svg" alt="close icon"/>
        </div>

        <div className="sidebar-menu">
          <div className='content-center menu-header text-3'>
            <span className='font-2'>All Radio</span>
          </div>
          <ul className='menu-items'>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/All Hits.svg" alt=""/>
                All Hits
              </span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/News Radio.svg" alt=""/>
                News Radio
              </span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Sports Radio.svg" alt=""/>
                Sports Radio
              </span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/My Favorites.svg" alt=""/>
                My Favorites
              </span>
            </li>
          </ul>
        </div>


        <div className="sidebar-menu">
          <div className='content-center menu-header text-3'>
            <span className='font-2'>Radio Categories</span>
          </div>
          <ul className='menu-items'>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Charts and Classics.svg" alt=""/>
                Charts and Classics
              </span>
              <span className='menu-station font-8'>2,168</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Rock.svg" alt=""/>
                Rock
              </span>
              <span className='menu-station font-8'>889</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Christian.svg" alt=""/>
                Christian Music
              </span>
              <span className='menu-station font-8'>570</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Chill.svg" alt=""/>
                Chill
              </span>
              <span className='menu-station font-8'>441</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Community.svg" alt=""/>
                Community Stations
              </span>
              <span className='menu-station font-8'>441</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Dance.svg" alt=""/>
                Dance
              </span>
              <span className='menu-station font-8'>284</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Education.svg" alt=""/>
                Education Stations
              </span>
              <span className='menu-station font-8'>245</span>
            </li>
            <li className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img src="/images/Adult.svg" alt=""/>
                Adult Stations
              </span>
              <span className='menu-station font-8'>156</span>
            </li>
          </ul>
        </div>


      </div>
    </Fragment>
  )
}

export default Categories
