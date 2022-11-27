import React, { useContext } from 'react'
import { MenuContext } from '../App'

const Category = ({categories, isAdmin = false}) => {
  const {handleCategorizedProduct} = useContext(MenuContext);

  return (
    <>
        <div className='w-1/3 md:w-1/2 mx-auto flex justify-center mt-7 mb-4'>
            <select 
            name='category'
            onChange={handleCategorizedProduct}
            className="select select-bordered w-full h-10 text-base md:w-64 md:text-xl items-center text-center">
              {!isAdmin && <option disabled selected>Select Category</option>}
              {isAdmin && <option disabled selected>Tap to edit</option>}
              {
                categories.map((category) => (
                  <option
                  value={category.id}
                  key={category.name}
                  >{category.name}</option>
                ))
              }
            </select>
          </div>
          <div className="w-3/4 pr-2 md:w-3/4 md:pr-16 text-xl md:text-2xl text-right text-semibold mt-5">
           {!isAdmin && <h2>Price</h2>}
          </div>
          
          
    </>
  )
}

export default Category