import React, {useContext, useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import {RadioAppData} from '../../utils/contextapi/context'
import Head from 'next/head'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import SideBar from '../../components/SideNavbar/SideBar'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import Footer from '../../components/Footer/Footer'
import Categories from '../../components/Dashboard/Categories/Categories'
import Subcategories from '../../components/Dashboard/Subcategories/Subcategories'
import {checkIfExists, findData} from '../../utils/common/helpers'
import {getData} from '../../utils/apis/api'

function RadioCategory() {
  const router = useRouter()
  const [data, setData] = useState({
    isSet: false,
    categories: '',
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
    // check if the query matched the continent list
    if(radiodata.isSet){
      if(!checkIfExists(a, radiodata.data.categories)) {
        router.replace('/404', window.location.pathname)
      }
    }
    if(radiodata.data.continents !== undefined) {
      const selData = findData(a, radiodata.data.categories)
      if(a !== data.categories) {
        setData({
          isSet: true,
          data: selData,
          categories: a
        })
      }
    }
  })

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | {data.data.name}</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { data.isSet ? <Subcategories data={data.data}/> : null }
            <Categories />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default RadioCategory
