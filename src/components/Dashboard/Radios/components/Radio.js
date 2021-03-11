import React from 'react'

import {openWindow, saveRadioToSession} from '../../../../utils/common/helpers'

function Radio(props) {

  return (
    <div className="radio-item">
      <div className="radio-item-wrapper">
        <div className="content-center radio-img-wrapper">
          <img 
            alt="station favicon"
            src={props.station.favicon} />
        </div>
        <div className="content-center radio-name">
          <a 
            href={props.station.homepage}
            rel="noreferrer"
            target='_blank'>
            <h2 className='text-2 font-1'>{props.station.name}</h2>
          </a>
          <div className='content-center location'>
            <img 
              alt="location icon"
              src="/images/Location.svg" />
            <span className='location-name text-2 font-7'>
              {props.station.state === "" ? props.station.country : props.station.state}</span>
          </div>
        </div>
        <div className="content-center radio-listen">
          <div 
            className="content-center listen-btn-wrapper"
            onClick={()=> openWindow(props.station.name)}>
            <span className='text-2 font-6'>Listen Now</span>
            <img 
              alt="play icon"
              src="/images/Play.svg" />
          </div>
          <div className='like'>
            {
              props.likeBtn === 'like' ? 
                <img 
                  alt="heart-like icon"
                  onClick={() => saveRadioToSession(props.station)}
                  src="/images/Like.svg" /> : 
                <img 
                  alt="delete icon"
                  onClick={() => props.removeStn(props.station)}
                  src="/images/Trash.svg" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radio
