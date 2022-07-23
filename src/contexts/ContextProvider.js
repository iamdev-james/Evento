import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [ menuActive, setMenuActive ] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  return (
    <StateContext.Provider
    value={{
      menuActive,
      setMenuActive,
      screenSize,
      setScreenSize
    }}
    >
      { children }
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);