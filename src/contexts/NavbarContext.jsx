import React, { useState, createContext } from 'react'

export const NavbarContext = createContext()

const NavbarContextProvider = ({ children }) => {
  const [home, setHome] = useState(false)
  const [about, setAbout] = useState(false)
  const [market, setMarket] = useState(false)
  const [resources, setResources] = useState(false)
  const [faqs, setFaqs] = useState(false)
  const [protocol, setProtocol] = useState(false)

  return (
    <NavbarContext.Provider
      value={{
        home,
        about,
        market,
        resources,
        faqs,
        protocol,
        setHome,
        setAbout,
        setMarket,
        setResources,
        setFaqs,
        setProtocol,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarContextProvider
