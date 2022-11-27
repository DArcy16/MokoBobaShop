import React from 'react'
import { Link } from 'react-router-dom'

const Tab = ({isAdmin = false}) => {
  return (
    <div className="tabs space-x-12 pl-4 md:pl-0 md:space-x-48 flex justify-center -mt-8 pb-5">
          <Link to='/' className="tab tab-bordered text-black hover:text-slate-400 tab-sm"> Home </Link>
           {!isAdmin && 
           <>
            <Link to='/menu' className="tab tab-bordered tab-sm text-black hover:text-slate-400"> Menu </Link>
            <Link to='/aboutus' className="tab tab-bordered tab-sm text-black hover:text-slate-400"> About us</Link>
           </>}
           {isAdmin && <Link to='/admin' className="tab tab-bordered tab-sm text-black hover:text-slate-400"> Edit </Link>}
           {isAdmin && <Link to='/orderp' className="tab tab-bordered tab-sm text-black hover:text-slate-400"> Order </Link>}

    </div>


  )
}

export default Tab