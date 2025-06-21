import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CaptainLogin = () => {
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');

  const { captain , setCaptain } = React.useContext(CaptainDataContext)
  const Navigate = useNavigate()

  const submitHandler = async (e)=>{
    e.preventDefault();
    const Captain = {
      email: Email,
      password: Password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.Captain)
      localStorage.setItem('token', data.token)
      Navigate('/captain-home')

    }  

    SetEmail('');
    SetPassword('');
  } 
  return (
    <div className='p-5 h-screen flex flex-col item-center justify-between '>
      <div>
        <img className="w-15 mb-3" src="Images/uberdriverlogo.png" alt="Uber logo"/>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-xl mb-2 font-medium text-base'>What's your Email</h3>
          <input 
            required 
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email" 
            placeholder='email@example.com' 
            className='bg-[#eeeeee] mb-5 px-2 py-2 border rounded p-2 w-full text-lg placeholder:text-sm' />

          <h3 className='text-xl mb-2 font-medium text-base'>Enter Password</h3>

          <input 
            required 
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password" 
            placeholder='Enter Password' 
            className='bg-[#eeeeee] mb-5 px-2 py-2 border rounded-md p-2 w-full text-lg placeholder:text-sm' />

          <button className='bg-black text-white mb-5 px-2 py-2 rounded w-full text-lg'>Login</button>
          <p className='text-orange-500'>Wanna join a fleet? <Link to='/captain-signup' className='text-blue-600 text-lg'>Register as a Captain!!</Link></p>
      </form>
    </div>
    <div>
        <Link to='/login' className='bg-green-900 text-white flex item-center justify-center mb-5 px-2 py-2 rounded w-full text-lg'>Sign in as User</Link>
    </div>
  </div>
  )
}

export default CaptainLogin
