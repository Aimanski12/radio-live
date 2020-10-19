import React from 'react'
import Head from 'next/head'
import Meta from '../components/Meta/Meta'
import {setName, filerUrlExt} from '../utils/common/helpers'
import {getData} from '../utils/apis/api'
import footerData from '../utils/data/footerdata.json'

function Listen(data) {
  let ext;
  const radio = data.data[0]
  console.log(radio)
  if(radio === undefined) {
    ext = 'nodata'
  } else {
    ext = filerUrlExt(radio.url_resolved)
  }

  const icons = footerData.map((t, i) => {
    return ( <a href={t.link}
      rel='noopener noreferrer'
      target='_blank' key={i}>
        <img src={`/images/${t.name}.svg`} alt={`${t.name} small icon`}/> </a> )
  })

  return (
    <div className="content-center listen-container">
      <Head>
        <title>Radio Live | Listen</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      <div className="r-wrapper">

        <div className="content-center listen-top">
          <img src="/images/radio.svg" 
            className='spkr-left'
            alt="speaker icon"/>
          <a href="/">
            <img src="/images/small-logo.svg" alt="radio-live icon"/>
          </a>
          <img src="/images/radio.svg" 
            className='spkr-right'
            alt="speaker icon"/>
        </div>

        <div className="content-center r-details">
          {ext === 'nodata' ? <h2 className='text-2 font-1'>Radio not found</h2> : 
          ( <>
            <img src={radio.favicon ? radio.favicon : '/images/logo-big.png'} alt=""/>
              <h2 className='text-3 font-4'>{setName(radio.name)}</h2>
              <div className='content-center l-location'>
                <img src="/images/Location.svg" alt="location icon"/>
                <span className='text-2 font-6'>
                  {radio.state ? setName(radio.state) : 
                    radio.country ? setName(radio.country) : 'Not Given'}</span>
              </div>
            </>
          ) }
        </div>

        <div className="content-center listen-audio">
          {ext === 'nodata' ? '' :

          ( ext === 'url' ? 
            <audio controls name='media'>
              <source src={radio.url_resolved} type="audio/ogg" />
              <source src={radio.url_resolved} type="audio/mpeg" />
            </audio> : 
              ext === 'mp3' ? 
              <video controls name='media'>
                <source src={radio.url_resolved} type="audio/ogg" />
                <source src={radio.url_resolved} type="audio/mpeg" />
              </video> : 
                <audio controls>
                  <source src={radio.url_resolved} type="audio/x-mpegurl" />
                  <source src={radio.url_resolved} type="audio/x-mpegurl" />
                </audio> )
          }
          </div>

        <footer className='content-center listen-footer'>
          <span className='text-2 font-7'>
              A project for fun, learning and creativity.</span>
          <div className='content-center footer-icons'>
            {icons}
          </div>
          <span className='text-2 font-7'>&#9400; Aiman Adlawan 2020</span>
        </footer>

      </div>
    </div>    
  )
}

export default Listen

Listen.getInitialProps = async (ctx) => {
  let data;
  const radio = ctx.query.radio
  if(radio === undefined) {
    data = false
  } else {
    data = await getData('name', encodeURIComponent(radio))
  }
  return {data}
}
