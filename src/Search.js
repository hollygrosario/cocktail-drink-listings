import React from 'react'
import { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useCocktails } from './Hooks/useCocktails'

const Search = () => {
  const inputRef = useRef('')
  const cocktails = ['drink1', 'drink2']
  return (
    <div className='py-5 container'>
      <div className='card'>
        <div className='card-body'>
        <label>
        <input type='radio'
         name='a'
         value='a'
         checked={true}
         onChange=''
         />
         Category
         </label>
         <label>
         <input type='radio'
          name='a'
          value='a'
          checked={true}
          onChange=''
          />
          Glass
          </label>
          <input
            id='search'
            type="text"
            className='form-control'
            ref={inputRef}
            onChange={() => {
              console.log('changing')
            }}
            placeholder='Search You Favorite Cocktail...'
          />
          <Button varient='primary' className='w-100 mt-2' onClick={() => alert('Alert!')}>Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Search
