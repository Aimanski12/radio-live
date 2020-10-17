import axios from 'axios'

const webUrl = 'https://fr1.api.radio-browser.info/json/'

export const fetchData = async (url) => {
  let data;
  await axios.get(`${webUrl}${url}`)
    .then(res => {
      data = res.data
    })
  return data
}
