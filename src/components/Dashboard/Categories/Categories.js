import React, {useContext} from 'react'
import {getTotal} from '../../../utils/common/helpers'
import {RadioAppData} from '../../../utils/contextapi/context'


function Categories() {
  const {radiodata} = useContext(RadioAppData)

  const categories = radiodata.isSet ? radiodata.data.categories.map((cat, i) => {
    return (
      <li className='content-center category-item text-3' key={i}>
        <span className='content-center category-name font-5'>
          <img src={`/images/${cat.name}.svg`} alt=""/>{cat.name}
        </span>
        <span className='category-station font-8'>{getTotal(cat.lists)}</span>
      </li>
    )
  }) : null

  return (
    <div className="category-radio">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>Radio Categories</span>
      </div>

      <div className="category-list-wrapper">
        <ul className='category-lists'>
          {categories}
        </ul>
      </div>

    </div>
  )
}

export default Categories
