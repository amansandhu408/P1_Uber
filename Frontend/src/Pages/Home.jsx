import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-left bg-[url(Images/homepage_pic.png)] h-screen pt-10 flex justify-between flex-col w-full'>
            <img className="w-20  ml-10" src="Images/logo.png" alt="Uber logo"/>
            <div className='bg-white py-5 px-5 rounded border'>
                <h2 className='text-3xl font-bold mb-5'>Get Started with Uber</h2>
                <Link to='/login' className='flex item-center justify-center w-full bg-green-900 text-white py-3 rounded mt-2'> continue </Link >
            </div>
        </div>
    </div>
  )
}

export default Home
