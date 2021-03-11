import React, {useContext, useEffect, useState} from 'react'
import Meta from '../../../components/Meta/Meta'
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
import Intro from '../../../components/Intro/Intro'
import {setFirebase} from '../../../utils/common/firebase'
import {getData} from '../../../utils/apis/api'

function CategoryRadio() {
  const router = useRouter()
  const [hasSession, setSessionData] = useState({
    isSet: false,
    session: false
  })
  const {radiodata, setradiodata} = useContext(RadioAppData)
  const [radiogenre, setGenre] = useState({
    isSet: false,
    page: '',
    textHeader: '',
    lists: {}, 
    totalpages: 0,
    radios: {}
  })

  
  useEffect(() => {
    const category = window.location.pathname.split('/')[2].split('-').join(' ')
    const cname = window.location.pathname.split('/')[3].split('-').join(' ')
    
    
    if (!radiodata.isSet) {
      (async function () {
        let data = await getData('home')
        setradiodata(data)
      })()
    }

    
    
    // check if the query matched the continent list
    if (radiodata.isSet) {
      let getLists = checkUrlValues(category, radiodata.data.categories)
      // check if the continent query value is valid
      if (!getLists) {
        router.replace('/404', window.location.pathname)
      } else {
        // check if the country value is valid
        if(!checkUrlValues(cname, getLists.lists)){
          router.replace('/404', window.location.pathname)
        } else {
          if(!hasSession.isSet){
            (async function(){
              const hasSession = await setFirebase(`Category ${category} ${cname}`)
              if(!hasSession){
                setSessionData({ isSet: true, session: true })
              } else {
                setSessionData({ isSet: true})
              }
              // get the radio station and put to the state
              let stations = sortByVote(await getData('genre', cname))
              if(radiogenre.page !== cname){
                setGenre({
                  isSet: true,
                  page: cname,
                  textHeader: setName(cname),
                  lists: stations,
                  totalpages: Math.ceil(stations.length / 21),
                  radios: sliceData(1, stations)
                })
              }
            })()
          }
        }
      }
    }
  }, [])

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
              { radiogenre.isSet ? 
                <Radios 
                  likeBtn='like'
                  textHeader={radiogenre.textHeader}
                  click={(val)=>getNewData(val)}
                  radios={radiogenre.radios}
                  total={radiogenre.lists.length}
                  totalpages={radiogenre.totalpages} /> : null }
              { radiogenre.isSet ? <Categories /> : null }
            </div>
          </div>
          <Footer />
        </main> </> ) : null }
    </div>
  )
}

export default CategoryRadio