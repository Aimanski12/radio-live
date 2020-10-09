import Head from 'next/head'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import SideBar from '../components/SideNavbar/SideBar'
import TopMenu from '../components/Dashboard/TopMenu/TopMenu'
import {getData} from '../utils/apis/api'

export default function Home({data}) {
  
  // console.log(data)

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

          </div>

        </div>

        
      </main>
       
    </div>
  )
}


Home.getInitialProps = async () => {
  let data = await getData('home')
  return { data }
}



