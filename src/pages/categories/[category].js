import React, {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {RadioAppData} from '../../utils/contextapi/context'
import {checkIfExists} from '../../utils/common/helpers'
import {getData} from '../../utils/apis/api'

import Categories from '../../components/Dashboard/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Meta from '../../components/Meta/Meta'
import SideBar from '../../components/SideNavbar/SideBar'
import Subcategories from '../../components/Dashboard/Subcategories/Subcategories'
import TopMenu from '../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../components/TopNavBar/TopNavBar'

function RadioCategory() {
  let selected;
  const router = useRouter()
  // assign query value
  const query = router.query.category
  const {radiodata, setradiodata} = useContext(RadioAppData)

  useEffect(() => {
    // preset data if context data is empty
    if (!radiodata.isSet) {
      (async function () {
        let data = await getData('home')
        setradiodata(data)
      })()
    }
  }, [])

  if (radiodata.isSet) {
    // check if the query value is valid
    const queryExists = checkIfExists(query, radiodata.data.categories)

    if (queryExists) {
      const filteredQuery = query.split('-').join(' ')
      const lists = radiodata.data.categories.filter(continent => {
        return continent.name.toLowerCase() === filteredQuery
      })
      // assign selected to the selected continent
      selected = lists[0]

      // redirect page if query value is invalid
    } else router.replace('/404', window.location.pathname)
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>Radio Live | Category</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { selected && <Subcategories data={selected}/>}
            <Categories />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default RadioCategory
