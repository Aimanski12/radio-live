import React, {useContext} from 'react'
import {RadioAppData} from '../../../utils/contextapi/context'
  
function TopMenu() {
  const {radiodata} = useContext(RadioAppData)

  const topMenu = radiodata.isSet ? radiodata.data.topMenu.map((cat, i) => {
    return (
      <li className='content-center top-menu-item text-3' key={i}>
        <img src={`/images/${cat.name}.svg`} alt=""/>
        <span className='font-5'>{cat.name}</span>
      </li>
    )
  }) : null

  return (
    <div className='top-menu'>
      <ul className='content-center'>
        {topMenu}
        <li className='content-center top-menu-item text-3'>
          <img src="/images/My Favorites.svg" alt=""/>
          <span className='font-5'>My Favorites</span>
        </li>
      </ul>
    </div>
  )
}

export default TopMenu