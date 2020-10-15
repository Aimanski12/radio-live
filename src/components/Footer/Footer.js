import React from 'react'
import footerData from '../../utils/data/footerdata.json'

function Footer() {
  const icons = footerData.map((t, i) => {
    return ( <a href={t.link}
      rel='noopener noreferrer'
      target='_blank' key={i}>
        <img src={`/images/${t.name}.svg`} alt={`${t.name} small icon`}/> </a> )
  })
  return (
    <footer className='content-center footer'>
      <span className='text-2 font-6'>
          A project for fun, learning and creativity.</span>
      <div className='content-center footer-icons'>
        {icons}
      </div>
      <span className='text-2 font-6'>&#9400; Aiman Adlawan 2020</span>
    </footer>
  )
}

export default Footer
