import React from 'react'
import About from './About/About'
import Donate from './Donation/Donate'
import OurWork from './Doings/OurWork'
import Testonomial from './Testonomials/Testonomial'

import Updates from './MediaUpdates/Updates'
import News from './News/News'


const Home = () => {
  return (
    <div>
    <About/>
    <Donate/>
    <OurWork/>
    <Testonomial/>
  <Updates/>
  <News/>

    </div>
  )
}

export default Home