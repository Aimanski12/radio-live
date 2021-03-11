
import {fetchData} from './fetchData'
import {sortData} from './helpers'

import genList from '../data/genre.json'
import listOfCont from '../data/countries.json'
import listOfCat from '../data/categories.json'
import top from '../data/topchoices.json'

export const getByCountry = async (country) => {
  const contData = await fetchData(`stations/bycountry/${country}`)
  return contData
}

export const getByGenre = async (genre) => {
  const contData = await fetchData(`stations/bytagexact/${genre}`)
  return contData 
}

export const getStation = async (name) => {
  const station = await fetchData(`stations/search?name=${name}`)
  return station
}

export const home = async () => {
  const contData = await fetchData('/countries')
  const catData = await fetchData('/tags')
  let continents = removeEmpty(sortData(listOfCont.continents, contData, true))
  let categories = sortData(listOfCat.categories, catData, false)
  let topMenu = sortData(top.topMenu, catData, false)
  let genre = sortData(genList.genlist, catData, false)
  return {continents, categories, topMenu, genre}
}

const removeEmpty = (continents) => {
  let c = continents.map(continent => {
    return {
      ...continent,
      lists: continent.lists.filter(list => list !== undefined)
    }
  })
  return c
}