import React from 'react'

const Card = ({name, photo}) => {
  return (
    <div>
        
        <div className="card md:w-64 bg-base-100 shadow-xl">
            <figure className='w-28 h-32 md:w-64 md:h-72 mx-auto'><img src={photo} alt={`photo of ${name}`}/></figure>
              <h2 className="my-2 text-xs md:my-4 md:text-base text-center tracking-tighter"><em>{name}</em></h2>
        </div>
    </div>
    
  )
}

export default Card