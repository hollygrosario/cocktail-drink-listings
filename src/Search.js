import React from 'react'
import { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import { useCocktails } from './Hooks/useCocktails'

const Search = () => {
  const inputRef = useRef('')
  const cocktails = ['drink1', 'drink2']
  return (
    <div className='py-5 container'>
      <div className='card'>
        <div className='card-body'>
          <label id='search'>Search Your Favorite Cocktail</label>
          <input
            id='search'
            type="text"
            className='form-control'
            ref={inputRef}
            onChange={() => {
              console.log('changing')
            }}
            placeholder='Search Your Favorite Cocktail...'
          />
          <Button varient='primary' className='w-100 mt-2' onClick={() => alert('Alert!')}>Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Search
