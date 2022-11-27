import React from 'react'
import ProductsList from '../components/ProductsList';
import Category from '../components/Category';
import Tab from '../components/Tab';

const Menu = ({ cid, productsC, categories, isOrdering}) => {
  return (
    <>
        <Tab />
        <hr />

        <Category categories={categories} />

          
          <div className='container w-full h-screen flex pb-4'>

            {/* <div className='w-1/5'></div> */}
            <div className='md:w-3/5 w-4/5 mx-auto '>
               { cid && productsC.map((productC) => (
                 <ProductsList productC={productC} key={productC.id} isOrdering={isOrdering}  />
                ))}
            </div>
            {/* { cid && <ProductForm newProduct={newProduct} setNewProduct={setNewProduct} cid={cid} />} */}
            
      </div>

      

      
    </>
  )
}

export default Menu