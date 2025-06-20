import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [UserData, SetUserData] = useState({});

    const submmitHandler = (e) => {
        e.preventDefault();
        SetUserData({
            email: email,
            password: password,
            fullname:{
                firstName: firstName,
                lastName: lastName
            }
        });
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
        
    return ( 
    <div className='p-5 h-screen flex flex-col item-center justify-between '>
        <div>
            <img className="w-15 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo"/>
            <form onSubmit={(e) => {
                submmitHandler(e)
                }}>
                <h3 className=' text-xl mb-2 font-medium text-base'>What's your name?</h3>
                <div className='flex gap-2 mb-4'>
                    <input 
                        required 
                        type="text" 
                        placeholder='Firstname' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='bg-[#eeeeee] w-1/2  px-2 py-2 border rounded p-2 w-full text-lg placeholder:text-sm' />
                        
                    <input 
                        required 
                        type="text" 
                        placeholder='Lastname' 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='bg-[#eeeeee] w-1/2 -2 py-2 border w-1/2 rounded p-2 w-full text-lg placeholder:text-sm' />
                </div>
                <h3 className='text-xl mb-2 font-medium text-base'>Enter Email</h3>

                <input 
                    required 
                    type="email" 
                    placeholder='email@example.com' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-[#eeeeee] mb-5 px-2 py-2 border rounded p-2 w-full text-lg placeholder:text-sm' />

                <h3 className='text-xl mb-2 font-medium text-base'>Enter Password</h3>

                <input 
                    required 
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-[#eeeeee] mb-5 px-2 py-2 border rounded-md p-2 w-full' />

                < button className='bg-black text-white mb-5 px-2 py-2 rounded w-full text-lg'>Login</button>
                <p className='text-green-900'>Already have a account?  <Link to='/login' className='text-orange-600 text-lg text-bold'> Login here!!</Link></p>
            </form>
        </div>
        <div>
            <p className='text-gray-500 text-[10px] lead-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
    </div>
  )
}

export default UserSignup
