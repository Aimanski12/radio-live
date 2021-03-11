import React, {Fragment, useContext} from 'react'
import Link from 'next/link'

import {getTotal, showMenu, setName, urlFormatTxt} from '../../../utils/common/helpers'
import {RadioAppData} from '../../../utils/contextapi/context'

function Categories() {
  const {radiodata} = useContext(RadioAppData)

  const topMenu = radiodata.isSet ? radiodata.data.topMenu.map((cat, i) => {
    return (
      <Link 
        key={i}
        href='/featured/[slug]'
        as={`/featured/${urlFormatTxt(cat.name)}`} >
        <a>
          <li 
            onClick={()=>showMenu('right')}
            className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img 
                alt={`${setName(cat.name)} icon`} 
                src={`/images/${cat.name}.svg`} />{cat.name}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  const categories = radiodata.isSet ? radiodata.data.categories.map((cat, i) => {
    return (
      <Link   
        as={`/categories/${urlFormatTxt(cat.name)}`}
        href='/categories/[slug]'
        key={i} >
        <a>
          <li 
            onClick={()=>showMenu('right')}
            className='content-center menu-item text-3'>
            <span className='content-center menu-name font-5'>
              <img 
                alt={`${setName(cat.name)} icon`}
                src={`/images/${cat.name}.svg`} />{cat.name}</span>
            <span className='menu-station font-8'>{getTotal(cat.lists)}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  return (
    <Fragment>
      <div className="right-menu">

        <div className="content-center close-btn">
          <img 
            alt="close icon" 
            onClick={()=>showMenu('right')}
            src="/images/close.svg" />
        </div>

        <div className="sidebar-menu">
          <div className='content-center menu-header text-3'>
            <span className='font-2'>All Radio</span>
          </div>
          <ul className='menu-items'>
            {topMenu}
            <li 
              onClick={()=>showMenu('right')}
              className='content-center menu-item text-3'>
              <span className='content-center menu-name font-5'>
                <img 
                  alt="heart icon" 
                  src="/images/My Favorites.svg" />
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
            {categories}
          </ul>
        </div>

      </div>
    </Fragment>
  )
}

export default Categories
