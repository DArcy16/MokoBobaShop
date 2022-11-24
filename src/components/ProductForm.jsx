import React, { useContext } from 'react'
import { MenuContext } from '../App'

const ProductForm = ({newProduct, setNewProduct, cid }) => {
    const {handleProductAdd} = useContext(MenuContext);

    function handleProductInput(e) {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
            category : parseInt(cid)
        })
    }



    return (
      <div className=' ml-12 w-1/5 -mt-5'>
    <form >
                  
                  <div className="form-control w-full">
                      <label className="label">
                         <span className="label-text">Product Name</span>
                      </label>
                      <input 
                        type='text'
                        placeholder='Type Here'
                        className='input input-bordered input-md w-full'
                        value = {newProduct.name}
                        name = 'name'
                        onChange={handleProductInput}
                      />
                    </div>
                    <div className="form-control w-full">
                      <label className="label">
                      <span className="label-text">Price</span>
                      </label>
                      <input 
                        type='number'
                        placeholder='Type Here'
                        className='input input-bordered input-md w-full'
                        value = {newProduct.price}
                        name = 'price'
                        onChange={handleProductInput}
                      />
                </div>
                
                  
      </form>
      <div className=' flex justify-center mt-6 '>
            {cid && <button className="btn glass btn-sm text-center" onClick={handleProductAdd}  disabled = {newProduct.price === ''}>Add Product</button>}
      </div>
 </div>
  )
}

export default ProductForm