import React, { createContext, useCallback, useEffect, useState } from 'react'
import Axios from 'axios'

const CocktailContext = createContext()

const CocktailProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  console.log('isLoading:', isLoading)
  const [cocktails, setCocktails] = useState([])
  console.log('cocktails:', cocktails)

// can combine the effect and getCocktails into one
  const getCocktails = useCallback(async () => {
    setIsLoading(true)
    try {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m'
    console.log('url:', url)
    const response = await Axios.get(url)
    if (response) {
      console.log('response:', response)
      setCocktails(response.data.drinks)
    }
    setIsLoading(false)
} catch (e) {
console.log('e:', e)
}
},[])

useEffect(() => {
    getCocktails()
  }, [getCocktails])


  return (
    <CocktailContext.Provider
      value={{
        isLoading,
        setIsLoading,
        cocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  )
}

export { CocktailContext, CocktailProvider }
