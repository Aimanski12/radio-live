import React from 'react'

function FeaturedRadio(props) {

  const stations = !props.stations ? (
    <div className="content-center radio-wrapper">
      <h3 className='text-2 font-1 no-results'>No Results Found.</h3>
    </div> ) : 
    props.stations.map((station, i) =>{
      return (
        <div className="radio-item" key={i}>
          <div className="radio-item-wrapper">
            <div className="content-center radio-img-wrapper">
              <img src={station.favicon} alt=""/>
            </div>
            <div className="content-center radio-name">
              <a href={station.homepage}
                rel="noreferrer"
                target='_blank'>
              <h2 className='text-2 font-1'>{station.name}</h2>
              </a>
              <div className='content-center location'>
                <img src="/images/Location.svg" alt=""/>
                <span className='location-name text-2 font-7'>
                  {station.state === "" ? station.country : station.state}</span>
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
    })

  return (
    <div className="featured-radio">
      <div className='content-center menu-header text-3'>
        <span className='font-2'>{props.textHeader}</span>
      </div>

      <div className="radio-wrapper">
        {stations}
      </div>
      
      {/* <div className="pagination">
        <h1>Pagination</h1>
      </div> */}

    </div>
  )
}

export default FeaturedRadio
