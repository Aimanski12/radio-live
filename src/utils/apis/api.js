import {home} from './apiFunc'


export const getData = async (route) => {
  let data;

  switch(route) {
    case 'home' : data = await home()
  }
  
  return data
}