
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








































// function to sort all lists according to the list pattern
// function sortList(continent){
//   return continent.map(name => {
//     for(let x = 0; x < data.length; x++){
//       if(data[x].name === name) return data[x]
//     }
//   })
// }