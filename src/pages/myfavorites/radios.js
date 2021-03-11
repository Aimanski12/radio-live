import React, {useContext, useEffect,useState} from 'react'
import Head from 'next/head'

import {RadioAppData} from '../../utils/contextapi/context'
import {sliceData, setSession} from '../../utils/common/helpers'
import {getData} from '../../utils/apis/api'
import {saveSession} from '../../utils/common/firebase'

import Categories from '../../components/Dashboard/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Meta from '../../components/Meta/Meta'
import Radios from '../../components/Dashboard/Radios/Radios'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../components/TopNavBar/TopNavBar'


function MyFavorites() {
  const {radiodata, setradiodata} = useContext(RadioAppData)
  const [data, setData] = useState({
    isSet: false,
    radios: {}
  })
  
  useEffect(() => {
    if (!radiodata.isSet) {
      (async function () {
        let data = await getData('home')
        setradiodata(data)
      })()
    }

    const sessionData = JSON.parse(sessionStorage.getItem('radio-live'))
    if(sessionData) {
      const stations = sessionData.station
      if (!data.isSet) {
        setData({ isSet: true, radios: stations})
      }
    } else {
      setData({ isSet: true, radios: {}})
    }
  }, [])
  
  function getNewData(val) {
    const newSet = sliceData(val, data.radios)
    setData({ ...data, selRadios: newSet })
  }

  function removeStation (station) {
    const sessionData = JSON.parse(sessionStorage.getItem('radio-live'))
    const newSet = data.radios.filter(r => r.name !== station.name)
    saveSession(newSet, sessionData._id)
    setData({...data, radios: newSet})
  }


  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | My Favorite Radios</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>

        <main className='content-center main-wrapper'>
          <TopNavBar />
          <div className="content-wrapper">
            <SideBar/>
            <div className='dashboard-container'>
              <TopMenu />
              { data.isSet ? 
                <Radios 
                  click={(val)=>getNewData(val)}
                  likeBtn='delete'
                  radios={data.radios}
                  removeStn={(stn) => removeStation(stn)}
                  textHeader='My Favorite Stations'
                  total={data.radios.length}
                  totalpages={data.data / 21} /> : null }
              <Categories />
            </div>
          </div>
          <Footer />
        </main>
    </div>
  )
}

export default MyFavorites
