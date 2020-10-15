import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {RadioAppData} from '../../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Dashboard/Categories/Categories'
import Radios from '../../components/Dashboard/Radios/Radios'
import {checkIfExists, sortByVote, setName, sliceData} from '../../utils/common/helpers'
import {getData} from '../../utils/apis/api'


function Genre() {
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
    const a = window.location.pathname.split('/')[2].split('-').join(' ')
    
    // check if the query matched the continent list
    if(radiodata.isSet){
      if(!checkIfExists(a, radiodata.data.genre[0].lists)) {
        router.replace('/404', window.location.pathname)
      }
    }

    // get the radio station and put to the state
    (async function () {
      let genre = sortByVote(await getData('genre', a))
      if(radiogenre.page !== a){
        setGenre({
          isSet: true,
          page: a,
          textHeader: setName(a),
          lists: genre,
          totalpages: Math.ceil(genre.length / 21),
          radios: sliceData(1, genre)
        })
      }
    })()
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
        <title>{`Radio Live | ${radiogenre.textHeader} Genre`}</title>
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

export default Genre