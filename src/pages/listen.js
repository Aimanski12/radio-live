import React from 'react'
import Head from 'next/head'
import {getData} from '../utils/apis/api'
import footerData from '../utils/data/footerdata.json'

function Listen() {


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
          <img src="http://www.streamsolution.net/services-logos/mmFWJBfbj08OcUaGGhAanzoSB7xh4Kl7I43fpJao-400x400.jpg" alt=""/>
          <h2 className='text-3 font-4'>Sample Name</h2>
          <div className='content-center l-location'>
            <img src="/images/Location.svg" alt="location icon"/>
            <span className='text-2 font-6'>France</span>
          </div>
        </div>

        <div className="content-center listen-audio">
          <audio controls>
            <source src="http://musicbird.leanstream.co/JCB032-MP3" type="audio/ogg" />
            <source src="http://musicbird.leanstream.co/JCB032-MP3" type="audio/mpeg" />
          </audio>
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
  console.log(ctx)
}