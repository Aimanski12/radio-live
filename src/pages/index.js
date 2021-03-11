import React, {useContext, useState, useEffect} from 'react'
import {RadioAppData} from '../utils/contextapi/context'
import Meta from '../components/Meta/Meta'
import Head from 'next/head'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import SideBar from '../components/SideNavbar/SideBar'
import TopMenu from '../components/Dashboard/TopMenu/TopMenu'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import FeaturedRadio from '../components/Dashboard/FeaturedRadio/FeaturedRadio'
import Categories from '../components/Dashboard/Categories/Categories'
import {getData} from '../utils/apis/api'
import {setFirebase} from '../utils/common/firebase'
import stations from '../utils/data/selected.json'

export default function Home({data}) {
  const [hasSession, setSession] = useState({
    isSet: false,
    session: false
  })
  const {radiodata, setradiodata} = useContext(RadioAppData)
  
  useEffect(() => {
    if(!radiodata.isSet) {
      setradiodata(data)
    }

    if(!hasSession.isSet){
      (async function(){
        const hasSession = await setFirebase('Home')
        if(!hasSession){
          setSession({ isSet: true, session: true })
        } else {
          setSession({ isSet: true})
        }
      })()
    }
  }, [])

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | Home Page</title>
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
                <FeaturedRadio 
                  textHeader='Featured Radios'
                  stations={stations}/>
                <Categories />
              </div>
            </div>
            <Footer />
          </main> </>) : null }      
       
    </div>
  )
}

Home.getInitialProps = async () => {
  let data = await getData('home')
  return { data }
}



