import React from 'react'
import { useCocktails } from './Hooks/useCocktails'

const List = () => {
  const { cocktails } = useCocktails()
  console.log('cocktails:', cocktails)
  return (
    <h3>Cocktail Drink Listings</h3>
  )
}

export default List
