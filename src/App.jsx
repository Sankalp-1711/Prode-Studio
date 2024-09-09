import React from 'react'
import './App.scss'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'
import Trending from './Components/Trending/Trending'
import ConsciousCouture from './Components/ConsciousCouture/ConsciousCouture'
import New from './Components/NewIn/New'
import Collection from './Components/Collection/Collection'
import Hero from './Components/Hero/Hero'
const App = () => {
  return (
    <>
    <Hero/>
    <New/>
    <Collection/>
  <ConsciousCouture/>
    <Trending/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App