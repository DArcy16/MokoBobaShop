import React, { useContext } from 'react'
import { MenuContext } from '../App'

const ProductForm = ({newProduct, setNewProduct, cid, isAdding = false }) => {
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
      { cid && <div className=' flex justify-center mt-6 '>
             {isAdding ? 
            <span class="flex w-2/8">
                <span class="animate-ping absolute inline-flex h-6 w-24 rounded-full bg-zinc-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-6 w-24 bg-zinc-500 opacity-40"></span>
              </span> :
            <button className="btn btn-sm text-center" onClick={handleProductAdd}  disabled = {newProduct.price === ''}>Add Product</button>}
      </div>}
 </div>
  )
}

export default ProductForm