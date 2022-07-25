import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [ menuActive, setMenuActive ] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)
  const [ isLoggedIn, setIsLogged ] = useState(false)
  const [ token, setToken ] = useState('')
  const [ adminData, setAdminData ] = useState('')

  return (
    <StateContext.Provider
    value={{
      menuActive,
      setMenuActive,
      screenSize,
      setScreenSize,
      isLoggedIn,
      setIsLogged,
      token,
      setToken,
      adminData,
      setAdminData
    }}
    >
      { children }
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);