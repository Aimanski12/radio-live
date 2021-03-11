import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {getTotal, urlFormatTxt} from '../../../utils/common/helpers'

function Countries({data}) {
  const router = useRouter()
  const url = router.query.featured

  function setCountries() {
    return data.lists.map((b, i) => {
      return (
        <Link 
          as={`/featured/${urlFormatTxt(url)}/${urlFormatTxt(b.name)}`}
          href='/featured/[featured]/[slug]'
          key={i}>
          <a>
            <div className="country-item">
              <div className="country-item-wrapper">
                <div className="content-center country-img-wrapper">
                  <img src={`/images/${data.name}.svg`} alt=""/>
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
        <span className='font-2'>{data.name}</span>
        <span>
          <i className='font-2 totalStations'>
            {getTotal(data.lists)} Stations</i>
        </span>
      </div>
      <div className="country-list-wrapper">
        {setCountries()}
      </div>
    </div>
  )
}

export default Countries
