
import {fetchData} from './fetchData'
import listOfCont from '../data/countries.json'
import listOfCat from '../data/categories.json'
import genList from '../data/genre.json'
import top from '../data/topchoices.json'
import {sortData} from './helpers'

export const home = async () => {
  const contData = await fetchData('/countries')
  const catData = await fetchData('/tags')
  let continents = sortData(listOfCont.continents, contData, true)
  let categories = sortData(listOfCat.categories, catData, false)
  let topMenu = sortData(top.topMenu, catData, false)
  let genre = sortData(genList.genlist, catData, false)
  return {continents, categories, topMenu, genre}
}


