import React from 'react'
import Hero from '../component/layout/Hero'
import Services from '../component/layout/Services'
import Subscription from '../component/layout/Subscription'
import About from '../component/layout/About'
import App from '../component/layout/App'
import Reviews from '../component/layout/Reviews'

const Homes = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Subscription />
      <About />
      <App />
      <Reviews />
    </div>
  )
}

export default Homes
