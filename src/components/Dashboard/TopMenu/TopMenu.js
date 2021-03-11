import React, {useContext} from 'react'
import Link from 'next/link'

import {urlFormatTxt} from '../../../utils/common/helpers'
import {RadioAppData} from '../../../utils/contextapi/context'
  
function TopMenu() {
  const {radiodata} = useContext(RadioAppData)
  const topMenu = radiodata.isSet ? radiodata.data.topMenu.map((cat, i) => {
    return (
      <Link key={i}
        href='/featured/[featured]'
        as={`/featured/${urlFormatTxt(cat.name)}`}>
          <a>
            <li className='content-center top-menu-item text-3'>
              <img src={`/images/${cat.name}.svg`} alt=""/>
              <span className='font-5'>{cat.name}</span>
            </li>
          </a>
      </Link>
    )
  }) : null

  return (
    <div className='top-menu'>
      <ul className='content-center'>
        {topMenu}
        <Link href='/myfavorites/radios' as='/myfavorites/radios'>
          <a>
            <li className='content-center top-menu-item text-3'>
              <img src="/images/My Favorites.svg" alt=""/>
              <span className='font-5'>My Favorites</span>
            </li>
          </a>
        </Link>
      </ul>
    </div>
  )
}

export default TopMenu