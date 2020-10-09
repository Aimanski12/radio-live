import {fetchData} from './fetchData'
import listOfCont from '../data/countries.json'
import listOfCat from '../data/categories.json'
import genList from '../data/genre.json'
import top from '../data/topchoices.json'
import {sortCat, sortCont} from './helpers'

export const home = async () => {
  const contData = await fetchData('/countries')
  const catData = await fetchData('/tags')
  let continents = listOfCont.continents.map(continent =>{
    return {
      name: continent.name,
      lists: sortCont(continent.lists, contData)
    }
  })
  let categories = listOfCat.categories.map(cat => {
    return {
      name: cat.name,
      lists: sortCat(cat.lists, catData)
    }
  })
  let topMenu = top.topMenu.map(list => {
    return {
      name: list.name,
      lists: sortCat(list.lists, catData)
    }
  })
  let genre = genList.genlist.map(list => {
    return {
      name: list.name,
      lists: sortCat(list.lists, catData)
    }
  })

  return {continents, categories, topMenu, genre}
}
