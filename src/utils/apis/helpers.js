import {setName} from '../common/helpers'

// this function will sort the category 
// and will set the text to capitalize the first letter
export const sortCat = (continent, data) => {
  return continent.map(name => {
    for (let x = 0; x < data.length; x++) {
      if (data[x].name === name) {
        return {
          name: setName(data[x].name),
          stationcount: data[x].stationcount
        }
      }
    }
  })
}

// function to sort the data according by
// given country names in the continent list
export const sortCont = (continent, data) => {
  return continent.map(name => {
    for (let x = 0; x < data.length; x++) {
      if (data[x].name === name) return data[x]
    }
  })
}

// function to sort the data according to the data needed
export function sortData(jsonData, data, cont) {
  return jsonData.map(a => {
    return {
      name: a.name,
      lists: cont ? sortCont(a.lists, data) : sortCat(a.lists, data)
    }
  })
}
