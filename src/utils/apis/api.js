import {home, getByGenre, getByCountry, getStation} from './apiFunc'


export const getData = async (route, params) => {
  let data;
  
  switch(route) {
    case 'home' : data = await home();
      break
    case 'genre' : data = await getByGenre(params.split('-').join(' '));
      break
    case 'country': data = await getByCountry(params.split('-').join(' '));
      break
    case 'name': data = await getStation(params);
      break
  }

  return data
}