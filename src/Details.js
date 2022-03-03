import React from 'react'
import {useParams} from 'react-router-dom'
import { useCocktails } from './Hooks/useCocktails'

const Details = () => {
  const { DrinkId } = useParams()
  const { cocktails } = useCocktails()
  console.log('cocktails:', cocktails)

  return (
    <h3>User is presented with drink details based on the id of the drink after cliking on link</h3>
  )
}

export default Details
