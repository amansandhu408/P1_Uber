import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserLogin from './Pages/UserLogin';
import UserSignup from './Pages/UserSignup'
import CaptainLogin from './Pages/CaptainLogin';
import CaptainSignup from './Pages/CaptainSignup';
import './index.css';

const App =()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<UserLogin/>} />
                <Route path='/signup' element={<UserSignup/>} />
                <Route path='/captain-login' element={<CaptainLogin/>} />      
                <Route path='/captain-signup' element={<CaptainSignup/>} />
                </Routes>
        </div>
    );
}

export default App;
