import React, {useContext, useEffect} from 'react'
import {RadioAppData} from '../utils/contextapi/context'
import Meta from '../components/Meta/Meta'
import Head from 'next/head'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import SideBar from '../components/SideNavbar/SideBar'
import TopMenu from '../components/Dashboard/TopMenu/TopMenu'
import Footer from '../components/Footer/Footer'
import FeaturedRadio from '../components/Dashboard/FeaturedRadio/FeaturedRadio'
import Categories from '../components/Dashboard/Categories/Categories'
import {getData} from '../utils/apis/api'

export default function NotFound() {
  const {radiodata, setradiodata} = useContext(RadioAppData)
  useEffect(() => {
    if(!radiodata.isSet) {
      (async function () {
        let data = await getData('home')
        setradiodata(data)
      })() 
    }
  }, [])

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | Not Found</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>

      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            <FeaturedRadio 
              textHeader=''
              stations={false}/>
            <Categories />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}


