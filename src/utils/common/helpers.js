import countryHelper from '../data/countryHelper.json'
import {getCode} from 'country-list'

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

// function to toggle the class
function animEl (el, name) {
  el.classList.toggle(name)
}

// function that will add the numbers of all stations
export function getTotal(lists) {
  var sum = 0;
  for (let a in lists) {
    if (lists.hasOwnProperty(a)) {
      sum += lists[a].stationcount;
    }
  }
  return formtNum(sum);
}

// function that will format numbers to comma
export function formtNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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


// function to combine texts with hyphen in the middle for
// the url to make it clean
export function urlFormatTxt(text) {
  const a = text.split(' ').map(b => {
    return b.toLowerCase()
  })
  return a.join('-')
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

// function used to check is the url query parameter
// is in the listed data
export function checkIfExists(query, lists) {
  return lists.some(list => {
    return setName(list.name) === setName(query)
  })
}

// function to check if the 
export function checkUrlValues (query, lists) {
  let queryList = checkIfExists(query, lists)
  return queryList ? findData(query, lists) : false
}


// function to sort the data from the array of objects
// used in continents, genre,  categories and top menu
export function findData(url, data) {
  let a = data.filter(a => {
    return setName(a.name) === setName(url)
  })
  return a[0]
}

// function to extract the country code and convert it to 
// alpha-2 code to generate the svg icon
export function getCountryCode(name) {
  const imgUrl = 'http://catamphetamine.gitlab.io/country-flag-icons/3x2/'
  const a = countryHelper.country.filter(b => {
    return b.name === name
  })

  let code; 
  if(a.length < 1){
    code = `${imgUrl}${getCode(name)}.svg`
  } else {
    code = `${imgUrl}${a[0].code}.svg`
  }
  return code
}

// function to sort the radio stations by popularity
export function sortByVote (data) {
  return data.sort((a, b) => {
    var textA = a.votes;
    var textB = b.votes;
    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  })
}

// function for slice the whole piece of list and return 
// only the number of page that is needed for the page
// like 21 sets of data
export function sliceData(val, lists) {
  const a = val * 21
  const b = a - 21
  return lists.slice(b, a)
}

// function to open a new window
export function openWindow(name) {
  let url = 'localhost:3000/listen'


  window.open(url)


  // let params = `scrollbars=no, resizable=no, status=no, location=no, toolbar=no,menubar=no, width=360, height=520, left=100, top=100`;
  // window.open(url, 'sample', params)
}
