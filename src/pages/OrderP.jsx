import React, { useEffect, useState } from 'react'
import Tab from '../components/Tab';
import Table from '../components/Table';

const Order = () => {
    const[orderP, setOrderP]  = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:3000/order')
        .then((res) => res.json())
        .then((data) => setOrderP(data))
    },[orderP])

    const isAdmin = true;

    function handleProductOrder(id) {
    fetch('http://localhost:3000/order/' + id,{
      method : 'DELETE'
    })
  }

    

  return (
    <>
        <Tab isAdmin={isAdmin}/>
        <hr />
        <div className="container box-border items-center p-4 space-y-4">
            <h2 className='text-xl font-bold text-center'>Order List</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-2/3 mx-auto">
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
                    <Table item={item} key={item.id} handleProductOrder={handleProductOrder}/>
                  ))}
                </tbody>
              </table>
             
              {orderP===[] && <div className='h-full items-center text-4xl text-bold mx-auto'>
                <h2>No Order Yet</h2>
              </div>}
            </div>
        </div>
    </>
  )
}

export default Order