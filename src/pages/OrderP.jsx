import React, { useEffect, useState } from 'react'
import Tab from '../components/Tab';
import Table from '../components/Table';

const Order = () => {
    const[orderP, setOrderP]  = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/order')
        .then((res) => res.json())
        .then((data) => {
        setOrderP(data)
        setIsLoading(false);
      })
    },[])

    const isAdmin = true;

    function handleProductOrder(id) {
    fetch('https://my-json-server.typicode.com/DArcy16/MokoBobaShop/order/' + id,{
      method : 'DELETE'
    })
  }

    

  return (
    <>
        <Tab isAdmin={isAdmin}/>
        <hr />
        <div className="container md:w-3/4 mx-auto items-center p-4 space-y-4">
            <h2 className='text-xl font-bold text-center'>Order List</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-2/3 mx-auto text-center items-center">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Check Order</th>
                  </tr>
                </thead>
                  
               
                
                <tbody>
                  {/* <!-- row 1 --> */}
                  { orderP?.map( item => (
                    <Table item={item} key={item.id} handleProductOrder={handleProductOrder} isLoading={isLoading}/>
                  ))}
                </tbody>
              </table>
            </div>
               { isLoading &&
                  <div class="flex ml-32 md:ml-96 h-24 mx-auto items-center">
                  <span class="animate-ping absolute inline-flex h-6 w-24 md:h-8 md:w-36 rounded-full bg-zinc-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-4 w-24 md:h-6 md:w-36 bg-zinc-500 opacity-40"></span>
                  </div>}
                
            
        </div>
    </>
  )
}

export default Order