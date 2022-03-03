import React from 'react'
import { useCocktails } from './Hooks/useCocktails'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const List = () => {
  const { isLoading, cocktails } = useCocktails()
  console.log('cocktails:', cocktails)
  console.log('cocktails.length:', cocktails.length)

// Could make a separate loading component with a spinner
if (isLoading) {
  console.log('isLoading:', isLoading)
  return (
    <div className='container pb-5'>z
      <h3 className='text-center'>Loading....</h3>
    </div>
  )
}

// will link to the details page by drink id
// {'/details/$'${cocktail.idDrink}}

if (cocktails) {
    return (
    <>
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Drink Name</th>
          <th>Category</th>
          <th>Glass</th>
        </tr>
      </thead>
      <tbody>
      {cocktails.map(cocktail => (
         <tr key={cocktail.idDrink}>
           <td>
           <Link to={'/details'}>{cocktail.strDrink}</Link>
           </td>
           <td>{cocktail.strCategory}</td>
            <td>{cocktail.strGlass}</td>
         </tr>
      ))}
      </tbody>
    </Table>
    </>
 )
} else {
  return null
}
}
export default List
