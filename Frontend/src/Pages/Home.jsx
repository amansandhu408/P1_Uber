import React, { useState} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
  const [pickup , setPickup] = useState('')
  const [destination, setDestination]=useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="" alt="Uber" />

      <div className='h-screen w-screen'>
        {/* image for temporary use */ }
        <img className='h-full w-full object-cover' src="" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>

              <input
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-12 text-lg rounded-lg w-full mt-5'
              type="text" placeholder='Add a pick-up location' />
              
              <input 
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-12 text-lg rounded-lg w-full mt-5'
              type="text" placeholder='Add a destination location' />
          </form>
          <div ref={panelRef} className=' bg-red-500 h-0'>

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
