import React, {useContext} from 'react'
import {RadioAppData} from '../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import SideBar from '../components/SideNavbar/SideBar'
import TopMenu from '../components/Dashboard/TopMenu/TopMenu'
import Footer from '../components/Footer/Footer'
import FeaturedRadio from '../components/Dashboard/FeaturedRadio/FeaturedRadio'
import Categories from '../components/Dashboard/Categories/Categories'
import {getData} from '../utils/apis/api'
import stations from '../utils/data/selected.json'


export default function Home({data}) {
  const {radiodata, setradiodata} = useContext(RadioAppData)
  if(!radiodata.isSet) {
    setradiodata(data)
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | Home Page</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          
          <div className='dashboard-container'>
            <TopMenu />
            <FeaturedRadio 
              stations={stations}/>
            <Categories />
          </div>
        </div>
        <Footer />
      </main>
       
    </div>
  )
}

Home.getInitialProps = async () => {
  let data = await getData('home')
  return { data }
}



