import React from 'react'
import {showMenu} from '../../../utils/common/helpers'

function Logo() {
  return (
     <div className='content-center top-navbar'>
      <div className="content-center menu-burger">
        <img 
          onClick={()=>showMenu('left')}
          src="/images/menu-burger.svg" alt="menu burger icon"/>
      </div>
      <div className='small-logo'>
        <a href="/">
          <img src="/images/small-logo.svg" alt="radio live small icon"/>
        </a>
      </div>
      <div className="menu-lens">
        <img 
          onClick={()=>showMenu('right')}
          src="/images/lens.svg" alt="menu heart icon"/>
      </div>
    </div>
  )
}

export default Logo
