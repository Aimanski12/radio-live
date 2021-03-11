import React from 'react'
import Link from 'next/link'

import {getTotal, urlFormatTxt} from '../../../utils/common/helpers'
import {useRouter} from 'next/router'

function Countries(props) {
  const category = router.query.category
  const router = useRouter()

  function setCountries() {
    return props.data.lists.map((b, i) => {
      return (
        <Link key={i}
          href='/categories/[category]/[slug]'
          as={`/categories/${urlFormatTxt(category)}/${urlFormatTxt(b.name)}`}>
          <a>
            <div className="country-item">
              <div className="country-item-wrapper">
                <div className="content-center country-img-wrapper">
                  <img 
                    alt={`${props.data.name} icon`}
                    src={`/images/${props.data.name}.svg`} />
                </div>
                <div className="content-center country-name">
                  <h2 className='text-2 font-1'>{b.name}</h2>
                  <div className='content-center country-stations'>
                    <span className='total-station text-2 font-7'>Stations</span>
                    <span className='text-2 totals font-4'>{b.stationcount}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      )
    })
  }

  return (
    <div className="country-wrapper">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>{props.data.name}</span>
        <span>
          <i className='font-2 totalStations'>
            {getTotal(props.data.lists)} Stations</i>
        </span>
      </div>
      <div className="country-list-wrapper">
        {setCountries()}
      </div>
    </div>
  )
}

export default Countries

 