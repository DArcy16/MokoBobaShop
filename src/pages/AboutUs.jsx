import React from 'react'
import Tab from '../components/Tab'

const AboutUs = () => {
  return (
    <>
      <Tab />
      <hr />
    <div className='container p-8 mx-auto min-w-sm sm:w-3/4 md:w-1/2'>
      <div className="w-36 h-36 md:w-48 md:h-48 items-center mx-auto mt-6">
        <img src="/Founder.jpeg" alt="founder img" /> 
      </div>

      <h2 className='text-lg md:text-2xl text-center mt-2'><em>Founder</em></h2>
      <h2 className='text-base md:text-md text-center'><em>Est. 24 October 2020</em> </h2>
      <h2 className='text-lg md:text-xl text-center mt-6'><em>Name</em> </h2>
      <h2 className='text-base md:text-l text-center mt-1'><em>Aung Kyaw Soe</em></h2>
      <h2 className='text-lg md:text-xl text-center mt-6'><em>Started at</em></h2>
      <h2 className='text-base md:text-l text-center mt-1'><em>19 years</em></h2>
      <h2 className='text-lg md:text-xl text-center mt-6'><em>Logo meaning</em></h2>
      <h2 className='text-base md:text-l text-center mt-1 leading-relaxed'><em>
      ``We wish for giving our customers vibe of flying to the moon by drinking our drinks.<br />
      And the three stars on our logo means three siblings of us.<br />
      And 'Moko Boba' is just a cute name that express our theme and we like it so.``</em>
       </h2>
      <div className='flex justify-center space-x-12 w-full mx-auto'>
            <img src='/IMG_4509.png' alt='logo' className='w-36 h-36 md:w-48 md:h-48'></img>
      </div>






    </div>
    </>
  )
}

export default AboutUs