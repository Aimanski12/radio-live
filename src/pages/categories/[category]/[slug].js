import React, {useContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import {checkIfExists, findData, formatText, sortByVote, sliceData} from '../../../utils/common/helpers'
import {getData} from '../../../utils/apis/api'
import {RadioAppData} from '../../../utils/contextapi/context'

import Categories from '../../../components/Dashboard/Categories/Categories'
import Footer from '../../../components/Footer/Footer'
import Meta from '../../../components/Meta/Meta'
import Radios from '../../../components/Dashboard/Radios/Radios'
import SideBar from '../../../components/SideNavbar/SideBar'
import TopMenu from '../../../components/Dashboard/TopMenu/TopMenu'
import TopNavBar from '../../../components/TopNavBar/TopNavBar'

function CategoryRadio() {
  const router = useRouter()
  
  const {radiodata, setradiodata} = useContext(RadioAppData)

  const [categories, setCategories] = useState({
    isSet: false,
    page: '',
    textHeader: '',
    lists: {}, 
    radios: {},
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

  const category = router.query.category
  const selCategory = router.query.slug

  if (radiodata.isSet) {
    // check if featured query is a valid value
    const isValid = checkIfExists(category, radiodata.data.categories)
    if (isValid) {
      // find the group of data from the featured query
      const categoryLists = findData(category, radiodata.data.categories)
      // check if the featured value is a valid value
      const isValidSelection = checkIfExists(selCategory, categoryLists.lists)
      if (isValidSelection) {
        (async function () {
          // query data and sort data according to its popularity
          let stations = sortByVote(await getData('genre', selCategory))
          if (!categories.isSet) {
            setCategories({
              isSet: true,
              lists: stations,
              page: selCategory,
              radios: sliceData(1, stations),
              textHeader: formatText(selCategory),
              totalpages: Math.ceil(stations.length / 21),
            })
          }
        })()
        // redirect to 404
      } else {
        notfound()
      }
      // redirect to 404
    } else {
      notfound()
    }
  }

  function getNewData(val) {
    const newSet = sliceData(val, categories.lists)
    setGenre({
      ...categories,
      radios: newSet
    })
  }

  return (
    <div className='content-center main-container'>
      <Head>
        <title>{`Radio Live | Category`}</title>
        <link rel="icon" href="/images/logo.ico" />
        <Meta />
      </Head>
      <main className='content-center main-wrapper'>
        <TopNavBar />
        <div className="content-wrapper">
          <SideBar/>
          <div className='dashboard-container'>
            <TopMenu />
            { categories.isSet &&
              <Radios 
                click={(val)=>getNewData(val)}
                likeBtn='like'
                radios={categories.radios}
                textHeader={categories.textHeader}
                total={categories.lists.length}
                totalpages={categories.totalpages} /> }
            { categories.isSet && <Categories />}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default CategoryRadio