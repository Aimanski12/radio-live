import React, {useContext, useEffect,useState} from 'react'
import Meta from '../../components/Meta/Meta'
import {RadioAppData} from '../../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Dashboard/Categories/Categories'
import Radios from '../../components/Dashboard/Radios/Radios'
import Intro from '../../components/Intro/Intro'
import {sliceData, setSession} from '../../utils/common/helpers'
import {setFirebase} from '../../utils/common/firebase'
import {getData} from '../../utils/apis/api'

function MyFavorites() {
  const {radiodata, setradiodata} = useContext(RadioAppData)


  const [hasSession, setSessionData] = useState({
    isSet: false,
    session: false
  })
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
  }, [])
    
  const sessionData = sessionStorage.getItem('radio-live')
  // console.log(sessionData)

  // if(!hasSession.isSet){
  //   (async function(){
  //     const hasSession = await setFirebase('Favorites')
  //     if(!hasSession){
  //       setSessionData({ isSet: true, session: true })
  //     } else {
  //       setSessionData({ isSet: true})
  //     }
      

  //     const sessiondata = sessionStorage.getItem('radio-live')
  //     if(!data.isSet){
  //       if(sessiondata === null){
  //         setData({ ...data, radios: [], selRadio: [], isSet: true
  //         })
  //       } else {
  //         let storedRadios = JSON.parse(sessiondata)
  //         setData({ isSet: true, radios: storedRadios,
  //           selRadio: sliceData(1, storedRadios.station) })
  //       }
  //     }

  //   })()
  // }



  function getNewData(val) {
    const newSet = sliceData(val, data.radios)
    setData({ ...data, selRadios: newSet })
  }

  function removeStation (station) {
    const newSet = data.radios.station.filter(n => {
      return n.name !== station.name
    })

    let sessionData = { ...data.radios, station: newSet }

    setSession(sessionData)
    setData({ ...data, selRadio: sliceData(1, sessionData.station), radios: sessionData })
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
              {/* { data.isSet ? 
                <Radios 
                  likeBtn='delete'
                  removeStn={(stn) => removeStation(stn)}
                  textHeader='My Favorite Stations'
                  radios={data.selRadio}
                  total={data.radios.station.length}
                  click={(val)=>getNewData(val)}
                  totalpages={data.data / 21} /> : null } */}
              <Categories />
            </div>
          </div>
          <Footer />
        </main>
    </div>
  )
}

export default MyFavorites
