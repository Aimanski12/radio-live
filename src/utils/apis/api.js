import {home, getByGenre, getByCountry, getStation} from './apiFunc'


export const getData = async (route, params) => {
  let data;
  
  switch(route) {
    case 'home' : data = await home();
      break
    case 'genre' : data = await getByGenre(params);
      break
    case 'country': data = await getByCountry(params);
      break
    case 'name': data = await getStation(params);
      break
  }

  return data
}