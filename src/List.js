import React from 'react'
import { useCocktails } from './Hooks/useCocktails'

const List = () => {
  const { isLoading, cocktails } = useCocktails()
  console.log('cocktails:', cocktails)
  console.log('cocktails.length:', cocktails.length)

// Could make a separate loading component with a spinner
if (isLoading) {
  console.log('isLoading:', isLoading)
  return (
    <div className='container pb-5'>
      <h3 className='text-center'>Loading....</h3>
    </div>
  )
}

if (cocktails) {
  console.log('cocktails')
    return (
    <>
      <div>
          {cocktails.map(cocktail => (
             <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
          ))}
      </div>
    </>
 )
} else {
  return null
}
}
export default List
