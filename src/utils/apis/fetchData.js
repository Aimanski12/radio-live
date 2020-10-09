import axios from 'axios'

const webUrl = 'https://fr1.api.radio-browser.info/json/'

export const fetchData = async (url) => {
  let data;
  await axios.get(`${webUrl}${url}`)
    .then(res => {
      data = res.data
    })
  return data
}






// const fetchDa = () => {
//   axios('https://fr1.api.radio-browser.info/json/stations/bytagexact/classical')

//     // axios('https://fr1.api.radio-browser.info/json/tags')
//     // axios('https://fr1.api.radio-browser.info/json/countries')
//     .then(res => {
//       // let data = JSON.stringify(res.data)
//       let data = res.data
//       // console.log(data)
//       // let europe = sortList(country.europe)
//       // let asia = sortList(country.asia)
//       // let africa = sortList(country.africa)
//       // let australia = sortList(country.australia)
//       // let nAm = sortList(country.nAmerica)
//       // let sAm = sortList(country.sAmerica)



//       // let europe = country[2].asia

//       function sortList(continent) {
//         return continent.map(name => {
//           for (let x = 0; x < data.length; x++) {
//             if (data[x].name === name) return data[x]
//           }
//         })
//       }



//       // for (const key in country){
//       //   country[key]
//       // }

//       // const saa = Object.keys(country)
//       // console.log(saa)



//       let samp = data.sort((a, b) => {
//         var textA = a.votes;
//         var textB = b.votes;
//         return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
//       })

//       // console.log(samp)
//       // console.log(JSON.stringify(samp))
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }