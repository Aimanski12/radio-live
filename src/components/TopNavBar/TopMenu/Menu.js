import React from 'react'

import {showMenu} from '../../../utils/common/helpers'

function Logo() {
  return (
     <div className='content-center top-navbar'>
      <div className="content-center menu-burger">
        <img 
          alt="menu burger icon"
          onClick={()=>showMenu('left')}
          src="/images/menu-burger.svg" />
      </div>
      <div className='small-logo'>
        <a href="/">
          <img 
            alt="radio live small icon"
            src="/images/small-logo.svg" />
        </a>
      </div>
      <div className="menu-lens">
        <img 
          alt="menu heart icon"
          onClick={()=>showMenu('right')}
          src="/images/lens.svg" />
      </div>
    </div>
  )
}

export default Logo
