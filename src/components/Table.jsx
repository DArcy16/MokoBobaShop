import React from 'react'

const Table = ({item,handleProductOrder}) => {
  
  return (
    
    <tr key={item.id}>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td><input type="checkbox" className="checkbox" onChange={() => handleProductOrder(item.id)} /></td>
    </tr>
  )
}

export default Table