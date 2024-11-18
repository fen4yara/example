import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Catalog } from './pages/Catalog/Catalog'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {SPP} from './pages/SPP/SPP'
import {Search} from './pages/Seacrh/Search'
import { About } from "./pages/About/About"
import { Home } from "./pages/Home/Home"
import {Login} from './pages/Login/Login'
import { Profile } from './pages/Profile/Profile'

import { useContext, useState } from 'react'
import { AuthContext } from "./store/AuthContext"
import { Navigate, useNavigate } from 'react-router-dom';

export function App() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} ></Route>
          <Route path='/about' element={<About />} />
          <Route path={'/catalog/catalog-elem/:id'} element={<SPP />} />
          <Route path={'/catalog/search'} element={<Search />} /> 
          <Route path={'/login'} element={<Login />} /> 
          <Route path={'/profile'} element={<RequireAuth><Profile /></RequireAuth>} /> 
          
        </Routes>

      </div>   
    <Footer />

    </>
  )
  function RequireAuth() {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" />
    return <Profile />
}
}

