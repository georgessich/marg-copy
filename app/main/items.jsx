import React from 'react'
import BookCard from '../components/BookCard'
export const Items = ( { data, handleCategoryClick } ) => {
  return (
    <div  className="grid grid-cols-3">
     {data.map((item) => (<BookCard handleCategoryClick={handleCategoryClick} item={item}/>))}
    </div>
  )
}
