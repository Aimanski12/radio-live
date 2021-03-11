import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {RadioAppData} from '../../../utils/contextapi/context'
import {checkIfExists, findData, formatText, sortByVote, sliceData} from '../../../utils/common/helpers'
import {getData} from '../../../utils/apis/api'

import Categories from '../../../components/Dashboard/Categories/Categories'
import Footer from '../../../components/Footer/Footer'
import Meta from '../../../components/Meta/Meta'
import Radios from '../../../components/Dashboard/Radios/Radios'
import SideBar from '../../../components/SideNavbar/SideBar'
import TopMenu from '../../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../../components/TopNavBar/TopNavBar'

function FeaturedRadio() {
  const router = useRouter()
  const {radiodata, setradiodata} = useContext(RadioAppData)

  const [featuredradio, setFeaturedGenre] = useState({
    isSet: false,
    page: '',
    textHeader: '',
    lists: {},
    totalpages: 0,
    radios: {}
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

  const featured = router.query.featured
  const selection = router.query.slug

  if (radiodata.isSet) {
    // check if featured query is a valid value
    const isValid = checkIfExists(featured, radiodata.data.topMenu)
    if (isValid) {
      // find the group of data from the featured query
      const featuredLists = findData(featured, radiodata.data.topMenu)
      // check if the featured value is a valid value
      const isValidSelection = checkIfExists(selection, featuredLists.lists)
      if (isValidSelection) {
        (async function () {
          // query data and sort data according to its popularity
          let stations = sortByVote(await getData('genre', selection))
          if (!featuredradio.isSet) {
            setFeaturedGenre({
              isSet: true,
              page: selection,
              textHeader: formatText(selection),
              lists: stations,
              totalpages: Math.ceil(stations.length / 21),
              radios: sliceData(1, stations)
            })
          }
        })()
        // redirect to 404
      } else { notfound() }
      // redirect to 404
    } else { notfound() }
  }

  const getNewData = (val) => {
    const newSet = sliceData(val, featuredradio.lists)
    setFeaturedGenre({
      ...featuredradio,
      radios: newSet
    })
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>{`Radio Live | Featured Radio`}</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { featuredradio.isSet ? 
              <Radios 
                click={(val)=>getNewData(val)}
                likeBtn='like'
                radios={featuredradio.radios}
                textHeader={featuredradio.textHeader}
                total={featuredradio.lists.length}
                totalpages={featuredradio.totalpages} /> : null }
            { featuredradio.isSet ? <Categories /> : null }
          </div>
        </div>
        <Footer />
      </main> 
    </div>
  )
}

export default FeaturedRadio