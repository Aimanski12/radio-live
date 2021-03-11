import countryHelper from '../data/countryHelper.json'
import {saveInitalData} from './firebasehelpers'
import {saveSession} from './firebase'
import {getCode} from 'country-list'

// function to toggle the class
function animEl(el, name) {
  el.classList.toggle(name)
}


// function used to check is the url query parameter
// is in the listed data
export function checkIfExists(query, lists) {
  return lists.some(list => {
    return setName(list.name.toLowerCase()) === setName(query.split('-').join(' '))
  })
}

// function to check if the 
export function checkUrlValues(query, lists) {
  let queryList = checkIfExists(query, lists)
  return queryList ? findData(query, lists) : false
}

// filter if the url has mp3, aac, m3u8 extension
export function filerUrlExt(url) {
  let xt;
  const fUrl = url.split('.')
  const ext = fUrl[fUrl.length - 1].toLowerCase()
  if (ext === 'mp3' || ext === 'aac') {
    xt = 'mp3'
  } else if (ext === 'm3u8') {
    xt = 'm3u8'
  } else {
    xt = 'url'
  }
  return xt
}


// function to filter the number of text to render
export function filtertext(txt, width) {
  let t;
  if (width < 500) {
    t = sortText(txt, 22)
  } else if (width < 768) {
    t = sortText(txt, 17)
  } else if (width < 969) {
    t = sortText(txt, 20)
  } else if (width >= 969) {
    t = sortText(txt, 17)
  }
  return t
}


// function to sort the data from the array of objects
// used in continents, genre,  categories and top menu
export function findData(url, data) {
  const urlname = url.split('-').join(' ')
  let a = data.filter(a => {
    return setName(a.name) === setName(urlname)
  })
  return a[0]
}


export const formatText = (text) => {
  let a = text.split('-').map(b => setName(b))
  return a.join(' ')
}

// function that will format numbers to comma
export function formtNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}


// function to extract the country code and convert it to 
// alpha-2 code to generate the svg icon
export function getCountryCode(name) {
  const imgUrl = 'http://catamphetamine.gitlab.io/country-flag-icons/3x2/'
  const a = countryHelper.country.filter(b => {
    return b.name === name
  })

  let code;
  if (a.length < 1) {
    code = `${imgUrl}${getCode(name)}.svg`
  } else {
    code = `${imgUrl}${a[0].code}.svg`
  }
  return code
}



// function that will add the numbers of all stations
export function getTotal(lists) {
  const newList = lists.filter(list => list !== null)
  var sum = 0;
  for (let a in newList) {
    if (newList.hasOwnProperty(a)) {
      sum += newList[a].stationcount;
    }
  }
  return formtNum(sum);
}



// function to open a new window
export function openWindow(name) {
  let a = name.split('#').join('')
  let url = `https://radio-live.vercel.app/listen?radio=${a}`

  let params = `scrollbars=no, resizable=no, status=no, location=no, toolbar=no,menubar=no, width=320, height=500, left=50, top=50`;
  window.open(url, 'sample', params)
}


// function to set selected radio stations to the 
export async function saveRadioToSession(station) {
  const data = sessionStorage.getItem('radio-live')

  if(!data) {
    const _id = await saveInitalData('home')
    saveSession([{...station}], _id)
  } else {
    // parse data
    const dataSessions = JSON.parse(data)
    // store stations to a variable
    const r = dataSessions.station

    // check if the selected station exists in the array
    const exists = Object.keys(r).some(function (k) {
      return r[k].name === station.name;
    });

    // if not then add to the array and save
    if(!exists) {
      r.push({...station})
      saveSession(r, dataSessions._id)
    }
  }
}





// this function will capitalize the first letter 
// of every word
export const setName = (name) => {
  let a = name.split(' ')
  let b = a.map(a1 => {
    let c = a1.split('')
    let f = c.map((d, i) => {
      if (i === 0) {
        return d.toUpperCase()
      } else {
        return d
      }
    })
    return f.join('')
  })
  return b.join(' ')
}  



// function for slice the whole piece of list and return 
// only the number of page that is needed for the page
// like 21 sets of data
export function sliceData(val, lists) {
  const a = val * 21
  const b = a - 21
  return lists.slice(b, a)
}


// function to show side menu bars
export function showMenu(menu){
  const lname = 'show-leftmenu'
  const rname = 'show-rightmenu'
  const left = document.querySelector('.left-menu')
  const right = document.querySelector('.right-menu')
  
  if(menu === 'left') {
    animEl(left, lname)
    right.classList.remove(rname)
  } else {
    animEl(right, rname)
    left.classList.remove(lname)
  }  
}  


// function to sort the radio stations by popularity
export function sortByVote (data) {
  return data.sort((a, b) => {
    var textA = a.votes;
    var textB = b.votes;
    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  })
}
// function to combine texts with hyphen in the middle for
// the url to make it clean
export function urlFormatTxt(text) {
  const a = text.split(' ').map(b => {
    return b.toLowerCase()
  })  
  return a.join('-')
}  




