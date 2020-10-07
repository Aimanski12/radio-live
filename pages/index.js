import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import country from '../xx1.json'
import sa from '../xx.json'


export default function Home() {

  // do not forget country code
  // country code lookup npm
  // also flags npm

// search by country
// axios('https://fr1.api.radio-browser.info/json/stations/bycountry/mexico')

// search by genre
// axios('https://fr1.api.radio-browser.info/json/stations/bytagexact/70s')


axios('https://fr1.api.radio-browser.info/json/stations/bytagexact/classical')

// axios('https://fr1.api.radio-browser.info/json/tags')
// axios('https://fr1.api.radio-browser.info/json/countries')
  .then(res => {
    // let data = JSON.stringify(res.data)
    let data = res.data
    console.log(data)
    let europe = sortList(country.europe)
    let asia = sortList(country.asia)
    let africa = sortList(country.africa)
    let australia = sortList(country.australia)
    let nAm = sortList(country.nAmerica)
    let sAm = sortList(country.sAmerica)



    // let europe = country[2].asia
    
    function sortList(continent){
      return continent.map(name => {
        for(let x = 0; x < data.length; x++){
          if(data[x].name === name) return data[x]
        }
      })
    }
    


    // for (const key in country){
    //   country[key]
    // }

    // const saa = Object.keys(country)
    // console.log(saa)



    let samp = data.sort((a, b)=>{
      var textA = a.votes;
      var textB = b.votes;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    })

    // console.log(samp)
    // console.log(JSON.stringify(samp))
  })
  .catch(err => {
    console.log(err)
  })



// console.log(sa)


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          {/* <a href="http://direct.francebleu.fr/live/fbgascogne-midfi.mp3"
            target='_blank'> */}
            
          <a href='http://19183.live.streamtheworld.com:80/OLI968FMAAC.aac'
            target='_blank'>
            <button>La Clinique Radiophonique</button>
          </a>
        </h1>
        video
        <audio controls>
          <source src="http://20283.live.streamtheworld.com:3690/XHRED_FMAAC_SC" type="audio/mpeg" />
          <source src="http://20283.live.streamtheworld.com:3690/XHRED_FMAAC_SC" type="audio/ogg" />
          <p>Your browser does not support HTML5 audio, but you can still 
            <a href="audiofile.mp3">download the music</a>.</p>
        </audio>
      </main>
       
    </div>
  )
}





