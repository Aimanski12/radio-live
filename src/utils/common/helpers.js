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
    return list.name === setName(query)
  })
}


// function to sort the data from the array of objects
// used in continents, genre,  categories and top menu
export function findData(url, data) {
   let URL = setName(url)
  let a = data.filter(a => {
    return a.name === URL
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




















// function to sort all lists according to the list pattern
// function sortList(continent){
//   return continent.map(name => {
//     for(let x = 0; x < data.length; x++){
//       if(data[x].name === name) return data[x]
//     }
//   })
// }