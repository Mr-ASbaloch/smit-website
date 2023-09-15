import React, { useState } from 'react'
import ShowTime from './NavbarUpper/ShowTime'

import Home from './Home/Home'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Loader from './Loader/Loader'

const MainContent = () => {
  const [loading, setLoading] =useState(false)
  return (
    <div>
    {loading ? (
        <Loader />
      ) :( <> <ShowTime/>
      <Navbar/>
      <Home/>
      <Footer/> </>) } 



    </div>
  )
}

export default MainContent