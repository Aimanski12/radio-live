import React from 'react'

function Radio(props) {
  return (
    <div className="radio-item">
      <div className="radio-item-wrapper">
        <div className="content-center radio-img-wrapper">
          <img src={props.station.favicon} alt=""/>
        </div>
        <div className="content-center radio-name">
          <a href={props.station.homepage}
            rel="noreferrer"
            target='_blank'>
          <h2 className='text-2 font-1'>{props.station.name}</h2>
          </a>
          <div className='content-center location'>
            <img src="/images/Location.svg" alt=""/>
            <span className='location-name text-2 font-7'>
              {props.station.state === "" ? props.station.country : props.station.state}</span>
          </div>
        </div>
        <div className="content-center radio-listen">
          <div className="content-center listen-btn-wrapper">
            <span className='text-2 font-6'>Listen Now</span>
            <img src="/images/Play.svg" alt=""/>
          </div>
          <div className='like'>
            <img src="/images/Like.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radio
