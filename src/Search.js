import React from 'react'
import { useContext, useRef } from 'react'
import Button from 'react-bootstrap/Button'

const Search = () => {
  const inputRef = useRef('')
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
            }}
            placeholder='Search Your Favorite Cocktail...'
          />
          <Button varient='primary' className='w-100 mt-2' onClick=''>Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Search
