import {saveInitalData, getTime, checkIfExp} from './firebasehelpers'

export async function setFirebase(page) {
  let hasSession;
  const session = sessionStorage.getItem('radio-live')
  if(session) {
    const data = JSON.parse(session)
    if(checkIfExp(data.expiry)) {
      saveSession(data.radios, data._id)
      hasSession = true
    } else {
      hasSession = false
    }
  } else {
    const _id = await saveInitalData(page)
    saveSession([], _id)
    hasSession = false
  }
  return hasSession
}

export function saveSession (radios, _id){
  let data = {
    _id: _id,
    expiry: getTime('now'),
    station: radios
  }
  sessionStorage.setItem('radio-live', JSON.stringify(data))
}
