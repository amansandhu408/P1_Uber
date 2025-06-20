import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-10 flex justify-between flex-col w-full bg-black'>
            <img className="w-5  ml-8" src="public/Images/logo.png" alt="Uber logo"/>
            <div className='bg-white py-5 px-5'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <button className=' w-full bg-black text-white py-3 rounded mt-2'>continue</button>
            </div>
        </div>
    </div>
  )
}

export default Home
