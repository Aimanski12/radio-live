import React, {useContext} from 'react'
import Link from 'next/link'

import {RadioAppData} from '../../../utils/contextapi/context'
import {getTotal, formtNum, showMenu, urlFormatTxt} from '../../../utils/common/helpers'

function Genre() {
  const {radiodata} = useContext(RadioAppData)

    const continent = radiodata.isSet ? radiodata.data.continents.map((conts, i) => {
    return (
      <Link 
        as={`/continents/${urlFormatTxt(conts.name)}`}
        href='/continents/[countries]'
        key={i}>
        <a>
          <li 
            onClick={()=>showMenu('left')}
            className='content-center menu-item text-3'>
            <span className='menu-name font-5'>{conts.name}</span>
            <span className='menu-station font-8'>{getTotal(conts.lists)}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  const genre = radiodata.isSet ? radiodata.data.genre[0].lists.map((g, i) => {
    return (
      <Link 
        as={`/genre/${urlFormatTxt(g.name)}`}
        href='/genre/[slug]'
        key={i} >
        <a>
          <li 
            onClick={()=>showMenu('left')}
            className='content-center menu-item text-3' key={i}>
            <span className='content-center menu-name font-5'>
              <img 
                alt={`${g.name} icon`} 
                src={`/images/${g.name}.svg`} />{g.name}</span>
            <span className='menu-station font-8'>{formtNum(g.stationcount)}</span>
          </li>
        </a>
      </Link>
    )
  }) : null

  return (
    <div className="left-menu">
      <div className="content-center close-btn">
        <img 
          alt="close icon"
          onClick={()=>showMenu('left')}
          src="/images/close.svg" />
      </div>
      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <img 
            alt="light-green globe icon"
            src="/images/Globe.svg" />
          <span className='font-2'>Seach by Continent</span>
        </div>
        <ul className='menu-items'> {continent} </ul>
      </div>
      <div className="sidebar-menu">
        <div className='content-center menu-header text-3'>
          <img 
            alt="light-green globe icon" 
            onClick={()=>showMenu('')}
            src="/images/Genre.svg" />
          <span className='font-2'>Seach by Genre</span>
        </div>
        <ul className='menu-items'> {genre} </ul>
      </div>
    </div>
  )
}

export default Genre
