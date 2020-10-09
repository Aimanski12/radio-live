import React from 'react'
import Pop from './Svgs/Pop'
import Classical from './Svgs/Classical'
import Jazz from './Svgs/Jazz'
import Country from './Svgs/Country'
import Electronic from './Svgs/Electronic'
import Hiphop from './Svgs/Hiphop'
import Indie from './Svgs/Indie'
import Reggae from './Svgs/Reggae'
import Blues from './Svgs/Blues'
import Reggaeton from './Svgs/Reggaeton'
import Globe from './Svgs/Globe'
import Genre from './Svgs/Genre'
import AllHits from './Svgs/Allhits'
import NewsSvg from './Svgs/Newsradio'
import MyFavorites from './Svgs/Favorites'
import Sport from './Svgs/Sports'

function Svg(props) {
  let svgEl;

  if (props.svg === 'Pop'){
    svgEl = <Pop />
  } else if (props.svg === 'Classical') {
    svgEl = <Classical />
  } else if (props.svg === 'Jazz') {
    svgEl = <Jazz />
  } else if (props.svg === 'Country') {
    svgEl = <Country />
  } else if (props.svg === 'Electronic') {
    svgEl = <Electronic />
  } else if (props.svg === 'Hiphop') {
    svgEl = <Hiphop />
  } else if (props.svg === 'Indie') {
    svgEl = <Indie />
  } else if (props.svg === 'Reggae') {
    svgEl = <Reggae />
  } else if (props.svg === 'Blues') {
    svgEl = <Blues />
  } else if (props.svg === 'Reggaeton') {
    svgEl = <Reggaeton />
  } else if (props.svg === 'Globe') {
    svgEl = <Globe />
  } else if (props.svg === 'Genre') {
    svgEl = <Genre />
  } else if (props.svg === 'All Hits') {
    svgEl = <AllHits />
  } else if (props.svg === 'News Radio') {
    svgEl = <NewsSvg />
  } else if (props.svg === 'Sports Radio') {
    svgEl = <Sport />
  } else if (props.svg === 'My Favorites') {
    svgEl = <MyFavorites />
  }

  return (
    <div>
      {svgEl}
    </div>
  )
}

export default Svg
