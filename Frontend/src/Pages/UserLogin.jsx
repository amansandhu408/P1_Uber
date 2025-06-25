import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [UserData, SetUserData] = useState({});

  const { User, setUser } = useContext(UserDataContext);
  const Navigate = useNavigate();

  const submmitHandler = async (e)=>{
    e.preventDefault();

    const UserData ={
      email: Email,
      password: Password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, UserData);
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem('token', data.token);
      setUser(data.user);
      Navigate('/home');
    }

    SetEmail('');
    SetPassword('');
  }
  return (
    <div className='p-5 h-screen flex flex-col item-center justify-between '>
      <div>
        <img className="w-15 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo"/>
        <form onSubmit={(e) => {
          submmitHandler(e)
        }}>
          <h3 className='text-xl mb-2 font-medium text-base'>What's your Email?</h3>
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
            placeholder='Password' 
            className='bg-[#eeeeee] mb-5 px-2 py-2 border rounded-md p-2 w-full text-lg placeholder:text-sm' />

          <button className='bg-black text-white mb-5 px-2 py-2 rounded w-full text-lg'>Login</button>
          <p className='text-green-900'>New here? <Link to='/signup' className='text-orange-600 text-lg text-bold'> Create New Account!</Link></p>
      </form>
      </div>
      <div>
        <Link to='/captain-login' className='bg-blue-400 text-white flex item-center justify-center mb-5 px-2 py-2 rounded w-full text-lg'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
