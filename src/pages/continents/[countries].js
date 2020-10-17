import React, {useContext, useEffect,useState} from 'react'
import Meta from '../../components/Meta/Meta'
import {useRouter} from 'next/router'
import {RadioAppData} from '../../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Dashboard/Categories/Categories'
import Countries from '../../components/Dashboard/Countries/Countries'
import Intro from '../../components/Intro/Intro'
import {checkIfExists, findData, setName} from '../../utils/common/helpers'
import {setFirebase} from '../../utils/common/firebase'
import {getData} from '../../utils/apis/api'

function Country() {
  const router = useRouter()
  const [hasSession, setSessionData] = useState({
    isSet: false,
    session: false
  })
  const [data, setData] = useState({
    isSet: false,
    continent: '',
    data: {}
  })
  const {radiodata, setradiodata} = useContext(RadioAppData)
  if (!radiodata.isSet) {
    (async function () {
      let data = await getData('home')
      setradiodata(data)
    })()
  }
  
  useEffect(() => {
    const a = window.location.pathname.split('/')[2].split('-').join(' ')

    if(!hasSession.isSet){
      (async function(){
        const hasSession = await setFirebase(`Continents ${a}`)
        if(!hasSession){
          setSessionData({ isSet: true, session: true })
        } else {
          setSessionData({ isSet: true})
        }
    
        // check if the query matched the continent list
        if(radiodata.isSet){
          if(!checkIfExists(a, radiodata.data.continents)) {
            router.replace('/404', window.location.pathname)
          }
        }
        if(radiodata.data.continents !== undefined) {
          const selData = findData(a, radiodata.data.continents)
          if(a !== data.continent) {
            setData({
              isSet: true,
              data: selData,
              continent: a
            })
          }
        }
      })()
    }
  })
  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | Continent | {setName(data.continent)}</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
    { hasSession.isSet ? (
      <>
        { hasSession.session ? <Intro/> : null }
        <main className='content-center main-wrapper'>
          <TopNavBar />
          <div className="content-wrapper">
            <SideBar/>
            
            <div className='dashboard-container'>
              <TopMenu />
              { data.isSet ? <Countries data={data.data}/> : null }
              <Categories />
            </div>
          </div>
          <Footer />
      </main> </> ) : null }
    </div>
  )
}

export default Country
