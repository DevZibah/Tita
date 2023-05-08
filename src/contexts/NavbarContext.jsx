import React, { useState, createContext } from 'react'

export const NavbarContext = createContext()

const NavbarContextProvider = ({ children }) => {
  return <NavbarContext.Provider value={{}}>{children}</NavbarContext.Provider>
}

export default NavbarContextProvider
