import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {RadioAppData} from '../../../utils/contextapi/context'
import {getData} from '../../../utils/apis/api'
import {checkIfExists, findData, formatText, sliceData, sortByVote} from '../../../utils/common/helpers'

import Categories from '../../../components/Dashboard/Categories/Categories'
import Footer from '../../../components/Footer/Footer'
import Meta from '../../../components/Meta/Meta'
import Radios from '../../../components/Dashboard/Radios/Radios'
import SideBar from '../../../components/SideNavbar/SideBar'
import TopMenu from '../../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../../components/TopNavBar/TopNavBar'

function CountryRadio() {
  const router = useRouter()
  const {radiodata, setradiodata} = useContext(RadioAppData)
  const [radioCountry, setCountry] = useState({
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

  // redirect if values are not valid
  const notfound = () => {
    router.replace('/404', window.location.pathname)
  }

  const continent = router.query.countries
  const country = router.query.slug
  
  if(radiodata.isSet) {
    // check if continent query is a valid value
    const isValidCont = checkIfExists(continent, radiodata.data.continents)
    if(isValidCont) {
      // find the group of data from the continents query
      const continentLists = findData(continent, radiodata.data.continents)
      // check if the country value is a valid value
      const isValidCountry = checkIfExists(country, continentLists.lists)
      if(isValidCountry) {
        (async function () {
          // query data and sort data according to its popularity
          let stations = sortByVote(await getData('country', country))
          if(!radioCountry.isSet) {
            setCountry({
              isSet: true,
              lists: stations,
              page: country,
              radios: sliceData(1, stations),
              textHeader: formatText(country),
              totalpages: Math.ceil(stations.length / 21),
            })
          }
        })()
        // redirect to 404
      } else { notfound() }
      // redirect to 404
    } else { notfound() }
  }


  // function for setting the pagination
  function getNewData(val) {
    const newSet = sliceData(val, radioCountry.lists)
    setCountry({
      ...radioCountry,
      radios: newSet
    })
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>{`Radio Live | Country Stations`}</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { radioCountry.isSet ? 
              <Radios 
                click={(val)=>getNewData(val)}
                likeBtn='like'
                radios={radioCountry.radios}
                textHeader={radioCountry.textHeader}
                total={radioCountry.lists.length}
                totalpages={radioCountry.totalpages}/> : null }
            { radioCountry.isSet ? <Categories /> : null }
          </div>
        </div>
        <Footer />
      </main> 
    </div>
  )
}

export default CountryRadio