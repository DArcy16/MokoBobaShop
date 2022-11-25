import React from 'react'

const HCard = ({name, photo, label}) => {
  return (
    <div className='w-1/2 pb-6 md:pb-12'>
          <h3 className='md:ml-4 mt-2 md:mt-4 mb-3 md:mb-6 text-center text-base md:text-xl text-bold'><em>{label}</em></h3>
            <div className="card w-4/5 md:w-3/5 bg-base-100 shadow-xl mx-auto">
              <figure className='mt-4 w-3/4 md:max-h-84 md:w-2/3 mx-auto md:mt-14'><img src={photo} alt={`photo of ${name}`} /></figure>
              <h2 className="text-center font-bold text-xs md:text-xl my-3 md:my-6"> <em>{name}</em> </h2>
            </div>
    </div>
  )
}

export default HCard