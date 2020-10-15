import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {RadioAppData} from '../../../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../../../components/TopNavBar/TopNavBar'
import SideBar from '../../../components/SideNavbar/SideBar'
import TopMenu from '../../../components/Dashboard/TopMenu/TopMenu'
import Footer from '../../../components/Footer/Footer'
import Categories from '../../../components/Dashboard/Categories/Categories'
import Radios from '../../../components/Dashboard/Radios/Radios'
import {checkUrlValues, sortByVote, setName, sliceData} from '../../../utils/common/helpers'
import {getData} from '../../../utils/apis/api'

function CountryRadio() {
  const router = useRouter()
  const {radiodata, setradiodata} = useContext(RadioAppData)
  const [radiogenre, setGenre] = useState({
    isSet: false,
    page: '',
    textHeader: '',
    lists: {}, 
    totalpages: 0,
    radios: {}
  })

  if (!radiodata.isSet) {
    (async function () {
      let data = await getData('home')
      setradiodata(data)
    })()
  }
  
  useEffect(() => {
    const continent = window.location.pathname.split('/')[2].split('-').join(' ')
    const country = window.location.pathname.split('/')[3].split('-').join(' ')
    
    // check if the query matched the continent list
    if (radiodata.isSet) {
      let getLists = checkUrlValues(continent, radiodata.data.continents)
      // check if the continent query value is valid
      if (!getLists) {
        router.replace('/404', window.location.pathname)
      } else {
        // check if the country value is valid
        if(!checkUrlValues(country, getLists.lists)){
          router.replace('/404', window.location.pathname)
        } else {
          // get the radio station and put to the state
          (async function () {
            let stations = sortByVote(await getData('country', country))
            if(radiogenre.page !== country){
              setGenre({
                isSet: true,
                page: country,
                textHeader: setName(country),
                lists: stations,
                totalpages: Math.ceil(stations.length / 21),
                radios: sliceData(1, stations)
              })
            }
          })()
        }
      }
    }
  })

  function getNewData(val) {
    const newSet = sliceData(val, radiogenre.lists)
    setGenre({
      ...radiogenre,
      radios: newSet
    })
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>{`Radio Live | asd`}</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { radiogenre.isSet ? 
              <Radios 
                textHeader={radiogenre.textHeader}
                click={(val)=>getNewData(val)}
                radios={radiogenre.radios}
                total={radiogenre.lists.length}
                totalpages={radiogenre.totalpages} /> : null }
            { radiogenre.isSet ? <Categories /> : null }
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default CountryRadio