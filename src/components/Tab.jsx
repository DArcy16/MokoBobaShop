import React from 'react'
import { Link } from 'react-router-dom'

const Tab = ({isAdmin = false}) => {
  return (
    <div className="tabs space-x-12 md:space-x-48 flex justify-center -mt-8 pb-5 bg-base-300">
          <Link to='/' className="tab tab-bordered tab-sm"> Home </Link>
           {!isAdmin && 
           <>
            <Link to='/menu' className="tab tab-bordered tab-sm"> Menu </Link>
            <Link to='/aboutus' className="tab tab-bordered tab-sm"> About us</Link>
           </>}
            <Link to='/admin' className="tab tab-bordered tab-sm"> Edit </Link>
           {isAdmin && <Link to='/orderp' className="tab tab-bordered tab-sm"> Order </Link>}

    </div>


  )
}

export default Tab