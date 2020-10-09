
// function to sort all lists according to the list pattern
function sortList(continent){
  return continent.map(name => {
    for(let x = 0; x < data.length; x++){
      if(data[x].name === name) return data[x]
    }
  })
}


