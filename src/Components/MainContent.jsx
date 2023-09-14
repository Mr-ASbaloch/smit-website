import React from 'react'
import ShowTime from './NavbarUpper/ShowTime'

import Home from './Home/Home'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const MainContent = () => {
  return (
    <div>
<ShowTime/>
<Navbar/>
<Home/>
<Footer/>

    </div>
  )
}

export default MainContent