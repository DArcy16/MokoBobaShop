import React from 'react'
import Category from '../components/Category'
import ProductForm from '../components/ProductForm'
import ProductsList from '../components/ProductsList'
import Tab from '../components/Tab'

const Admin = ({newProduct, setNewProduct, cid, productsC, categories}) => {
    const isAdmin = true;
  return (
    
    <>  
        <Tab isAdmin={isAdmin}/>
        <hr />  

        <Category categories={categories} isAdmin={isAdmin} />

          
          <div className='container w-full h-screen flex flex-row-reverse justify-between pb-4'>

            <div className='w-1/5'></div>
            <div className='w-3/5'>
               { cid && productsC.map((productC) => (
                 <ProductsList productC={productC} key={productC.id} isAdmin = {isAdmin}  />
                ))}
            </div>
            { cid && <ProductForm newProduct={newProduct} setNewProduct={setNewProduct} cid={cid} />}
            
      </div>

      

      
    </>
  )
}

export default Admin