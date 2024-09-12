import React from 'react'
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage'


import Register from './components/register';
import Java from './components/Java';
import Python from './components/Python';
import Profile from './components/Profile';
import Webinar from './components/Webinar';

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Java' element={<Java />} />
      <Route path='/Python' element={<Python />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Webinar' element={<Webinar />} />
    </Routes>
    </>
  )
}
