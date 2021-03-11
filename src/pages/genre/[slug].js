import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {checkIfExists, setName, sliceData,sortByVote, } from '../../utils/common/helpers'
import {getData} from '../../utils/apis/api'
import {RadioAppData} from '../../utils/contextapi/context'

import Categories from '../../components/Dashboard/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Meta from '../../components/Meta/Meta'
import Radios from '../../components/Dashboard/Radios/Radios'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../components/TopNavBar/TopNavBar'

function Genre() {
  const router = useRouter()
  const genre = router.query.slug
  const {radiodata, setradiodata} = useContext(RadioAppData)

  const [genreStation, setGenreStations] = useState({
    isSet: false,
    lists: {},
    page: '',
    radios: {},
    textHeader: '',
    totalpages: 0,
  })

  useEffect(() => {
    // preset the data if empty
    if (!radiodata.isSet) {
      (async function () {
        let data = await getData('home')
        setradiodata(data)
      })()
    }
  }, [])

  const setStation = (stations) => {
    setGenreStations({
      isSet: true,
      lists: stations,
      page: genre,
      radios: sliceData(1, stations),
      totalpages: Math.ceil(stations.length / 21),
      textHeader: setName(genre),
    })
  }

  if (radiodata.isSet) {
    const isValid = checkIfExists(genre, radiodata.data.genre[0].lists)

    if (isValid) {
      (async function () {
        let stations = sortByVote(await getData('genre', genre))
        if (!genreStation.isSet) {
          setStation(stations)
        } else if (genreStation.page.toLocaleLowerCase() !== genre){
          setStation(stations)
        }
      })()
    } else router.replace('/404', window.location.pathname)
  }

  
  function getNewData(val) {
    const newSet = sliceData(val, genreStation.lists)
    setGenreStations({
      ...genreStation,
      radios: newSet
    })
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>{`Radio Live | Genre`}</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          
          <div className='dashboard-container'>
            <TopMenu />
            { genreStation.isSet ? 
              <Radios 
                click={(val)=>getNewData(val)}
                likeBtn='like'
                radios={genreStation.radios}
                textHeader={genreStation.textHeader}
                total={genreStation.lists.length}
                totalpages={genreStation.totalpages} /> : null }
            { genreStation.isSet ? <Categories /> : null }
          </div>
        </div>
        <Footer />
      </main> 
    </div>
  )
}

export default Genre