import React from 'react'
import Logo from './components/Logo'
import Svg from '../Svg/Svg'

function SideBar() {
  return (
    <div className='sidebar'>
      <Logo />

      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <Svg svg='Globe'/>
          <span>Seach by Continent</span>
        </div>
        <ul className='menu-items'>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>Africa</span>
            <span className='menu-station'>3,258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>Asia</span>
            <span className='menu-station'>3,258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>Australia</span>
            <span className='menu-station'>258</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>Europe</span>
            <span className='menu-station'>2,987</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>North America</span>
            <span className='menu-station'>3,207</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='menu-name'>South America</span>
            <span className='menu-station'>858</span>
          </li>
        </ul>
      </div>


      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <Svg svg='Genre'/>
          <span>Seach by Genre</span>
        </div>
        <ul className='menu-items'>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Pop'/> Pop
            </span>
            <span className='menu-station'>2,168</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Classical'/>Classical
            </span>
            <span className='menu-station'>889</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Jazz'/>Jazz
            </span>
            <span className='menu-station'>570</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Country'/>Country
            </span>
            <span className='menu-station'>441</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Electronic'/>Electronic
            </span>
            <span className='menu-station'>441</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Hiphop'/>Hiphop
            </span>
            <span className='menu-station'>284</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Indie'/>Indie
            </span>
            <span className='menu-station'>245</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Reggae'/>Reggae
            </span>
            <span className='menu-station'>156</span>
          </li>
          <li className='content-center menu-item text-3'>
            <span className='content-center menu-name'>
              <Svg svg='Blues'/>Blues
            </span>
            <span className='menu-station'>149</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default SideBar
