import React, {useEffect} from 'react'
import gsap from 'gsap'

function Intro() {

  useEffect(() => {
    let loading = document.querySelector('.loading')
    let intro = document.querySelector('.intro')

    let tl = gsap.timeline({repeat: 2})
    tl.to(loading, {
      opacity: 1,
      duration: 1.3,
    });
    tl.to(loading, {
      opacity: 0,
      duration: 0.7,
    });

    gsap.to(intro, {
      top: 0,
      height: 0,
      duration: 0.6,
      ease: 'power2',
      delay: 6,
      onComplete: () => {
        intro.style.display = 'none'
      }
    })
  })

  return (
    <div className='content-center intro'>
      <span>{''}</span>
      <div className='content-center intro-wrapper'>
        <img src="/images/logo-big.png" alt="radio-live image"/>
        <span className='text-3'>Listen to any FM Station from all over the world.</span>
        <span className='text-3 loading'>Loading. . .</span>
      </div>
      <span className='text-3 copy-right'>&#9400; Aiman Adlawan 2020</span>
    </div> 
  )
}

export default Intro
