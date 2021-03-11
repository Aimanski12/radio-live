import {saveInitalData, getTime, checkIfExp, addToSave} from './firebasehelpers'

export async function setFirebase(page) {
  let hasSession;
  const session = sessionStorage.getItem('radio-live')
  if(session){
    let _data = JSON.parse(session)
    if(checkIfExp(_data.expiry)) {
      saveSession(_data.token)
      addToSave(_data.token, 'pages', {pages: page})
    } else {
      addToSave(_data.token, 'pages', {pages: page})
    } 
    hasSession = true
  } else {
    const _id = await saveInitalData(page)
    saveSession([], _id)
    hasSession = false
  }
  return hasSession
}

export function saveSession (radios, _id){
  let data = {
    token: _id,
    expiry: getTime('now'),
    web_app: 'radio-live',
    station: radios
  }
  sessionStorage.setItem('radio-live', JSON.stringify(data))
}
