import React, {useState, createContext} from 'react'

export const RadioAppData = createContext()

export function RadioDataContext (props) {
  const [radiodata, setRadio] = useState({
    isSet: false,
    data: {}
  })

  function setradiodata (val) {
    if(!radiodata.isSet) {
      setRadio({
        isSet: true,
        data: {...val}
      })
    }
  }

  return (
    <RadioAppData.Provider value={{
      radiodata,  
      setradiodata
    }}>
      {props.children}
    </RadioAppData.Provider>
  )
}