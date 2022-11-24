import React, { useContext } from 'react'
import { MenuContext } from '../App';

const ProductsList = ({productC, isAdmin = false }) => {
  const {handleProductDelete, handleProductOrder} = useContext(MenuContext);

  return (
          
          
          <div className="flex justify-between items-center text-base md:text-lg text-semibold mt-4 md:px-10">
            <div className='w-full md:ml-12 md:w-4/5 flex justify-between'>
              <h2>{productC.name}</h2>
              <h2>{productC.price}</h2>
            </div>

            { !isAdmin && <div>
              <button 
              className="btn btn-outline btn-xs ml-4"
              onClick={() => handleProductOrder(productC.id)}
              >
                Order
              </button>
            </div>}
            
            {isAdmin && <div className="flex w-2/8">
              <button 
              className="btn btn-circle btn-outline btn-xs -pt-4 -ml-6"
              onClick={() => handleProductDelete(productC.id)}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>}
      
          </div>

        
        
  
  )
}

export default ProductsList