import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Moviesearch from '../movies page/Moviesearch'
import Pagenotfound from '../pages/Pagenotfound'
import Displaymovie from '../movies page/Displaymovie';
import { AuthProvider } from '../context/AuthContext'
import YourProfile from '../pages/YourProfile'
import PrivateRoute from './Privateroute'
 

const Approutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/pagenotfound' element={<Pagenotfound/>}/>  
        
        <Route path='/moviesearch' element={
          <PrivateRoute>
          <Moviesearch/>
          </PrivateRoute>
          }/>
        <Route path='/displaymovie' element={
          <PrivateRoute>
          <Displaymovie/>
          </PrivateRoute>
          } />
        <Route path='/yourprofile' element={
          <PrivateRoute>
          <YourProfile/>
          </PrivateRoute>
          } />
        
    </Routes>
  )
}

export default Approutes