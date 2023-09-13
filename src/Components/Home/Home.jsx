import React from 'react'
import About from './About/About'
import Donate from './Donation/Donate'
import OurWork from './Doings/OurWork'
import Testonomial from './Testonomials/Testonomial'

import Updates from './MediaUpdates/Updates'


const Home = () => {
  return (
    <div>
    <About/>
    <Donate/>
    <OurWork/>
    <Testonomial/>
  <Updates/>

    </div>
  )
}

export default Home