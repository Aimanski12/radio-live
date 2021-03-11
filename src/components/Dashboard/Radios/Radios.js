import React from 'react'

import {formtNum} from '../../../utils/common/helpers'
import Pagination from '../../Pagination/Pagination'
import Radio from './components/Radio'

function Radios(props) {

  const stations = props.radios.map((radio, i) =>{
    return ( <Radio 
              likeBtn={props.likeBtn}
              removeStn={props.removeStn}
              station={radio} key={i} /> )
  })

  return (
    <div className="featured-radio">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>{props.textHeader}</span>
        <span>
          <i className='font-2 totalStations'>
            {formtNum(props.total)} Stations</i>
        </span>
      </div>
      <div className="radio-wrapper">
        {
          props.total === 0 ? 
            <div className="content-center radio-wrapper">
              <h3 className='text-2 font-1 no-results'>You don't have any liked stations.</h3>
            </div> : stations
        }
      </div>

      {/* do not show the pagination if page is ony1 */}
      {props.totalpages > 1 ? 
        <Pagination 
          click={(val=>props.click(val))}
          totalpages={props.totalpages} /> : null }
    </div>
  )
}

export default Radios