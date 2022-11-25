import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card';
import HCard from '../components/HCard';
import Tab from '../components/Tab';

const images =[
  {
    id : 1,
    name : 'Blueberry Yougurt Juice',
    photo : '/BlueBerry_Yougurt_Juice.jpeg'
  },
  {
    id : 2,
    name : 'Dirty Milk Tea',
    photo : '/Dirty_Milk_Tea.jpeg'
  },
  {
    id : 3,
    name : 'Milo Dinosaur',
    photo : '/Milo_Dinosaur.jpeg'
  },
  {
    id : 4,
    name : 'Oreo Milk Tea',
    photo : '/Oreo_Milktea.jpeg'
  },
  {
    id : 5,
    name : 'Strawberry Lava',
    photo : '/Strawberry_Lava.jpeg'
  },
  {
    id : 6,
    name : 'Strawberry Soda',
    photo : '/Strawberry_Soda.jpeg'
  },
  {
    id : 7,
    name : 'Sweet Melon Milk Tea',
    photo : '/Sweet_Melon_MilkTea.jpeg'
  },
];

const hImages = [
  {
    id: 1,
    name : 'Purple Sticky Rice',
    photo : '/Purple_Sticky_Rice.jpeg',
    label : 'Our Signature:'
  },
  {
    id : 2,
    name : 'Chocolate Smoothie',
    photo : '/Chocolate_Smoothie.jpeg',
    label : 'Best Selling:'
  }
];



const Home = () => {
  return (
    <>
    <Tab />
    <hr />
    <div className='container box-border w-full h-full mx-auto mb-4'>
      <div className='p-5 md:p-6'>
        <div className='w-full text-center mx-auto text-4xl md:text-6xl md:mb-4 md:mt-2 space-y-2 md:space-y-6'>
        <h1><em>Welcome To</em></h1>
        <h1><em>Moko Boba Shop</em></h1>
      </div>
      <p className='text-center text-xs md:text-lg mt-2 md:mt-6 mb-2 tracking-widest'><em> "Let's fly to the moon by drinking our drink" </em></p>

    </div>
      

      <div className='w-full flex justify-between items-center rounded-border'>
        {
          hImages.map((image) => <HCard name={image.name} photo={image.photo} label={image.label} key={image.id}/>)
        }

      </div>

      <hr />
      

      <div className="px-3">
        <h3 className='ml-12 md:ml-20 text-base md:text-xl mt-6'> <em>Collections:</em> </h3>
        <div className='flex flex-wrap gap-3 md:gap-10 justify-center my-6'>
        
        {
          images.map((image) => <Card name={image.name} photo={image.photo} key={image.id}/>)
        }
        </div>
      </div>
      
      <hr />

      <footer className='Container flex flex-col md:flex-row-reverse md:justify-between md:px-20 items-center w-full md:h-48'>
        
              <div className='mt-6 md:mt-0 md:space-y-4'>
                <h2 className='font-bold text-base text-center'> Social: </h2>
                <div className='flex flex-row mt-2 space-x-2 md:mt-0 md:space-x-0 md:flex-col md:space-y-4 md:items-center'>
                  <div>
                    <a href="https://www.facebook.com/mokobobashop?mibextid=LQQJ4d" target='_blank'>
                      <img src="/icons8-facebook.svg" alt="" className='h-8'/>
                    </a>
                  </div>
                  <div>
                    <a href="https://instagram.com/mokobobashop?igshid=YmMyMTA2M2Y=" target='_blank'>
                      <img src="/instagram-new.png" alt="" className='h-8'/>
                    </a>
                  </div>
                </div>
                
              </div>

              <div className='mt-6 space-y-2 md:space-y-5 md:mt-0'>
                <h2 className='font-bold text-base text-center md:text-left'> Contact Us: </h2>
                <h2 className='md:text-base text-sm text-center md:text-left'>Phone No : <em>09784074717</em>  </h2>
                <h2 className='md:text-base text-sm text-center md:text-left'>Address : <em>Near BEHS(1),Lashio</em> </h2>
                

              </div>

              
              <div classsName="-pt-20 md:mt-0">
                <Link to='/admin'>                   
                  <img src='/IMG_4509.png' alt='logo' className='w-36 h-36 md:w-48 md:h-48'></img>
                </Link>
              </div>
              
          
        

      </footer>
      
    </div>
    </>
  )
}

export default Home