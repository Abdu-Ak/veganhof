import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Carousels from '../../components/Carousel/Carousels'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import NewProduct from '../../components/Newproduct/NewProduct'
import Features from '../../components/Features/Features'
import Contact from '../../components/Contact/Contact'
import BestProduct from '../../components/BestProduct/BestProduct'

function Landing() {
  return (
    <>

      <Navbar/>
      
      <Carousels/>

      <NewProduct/>

      <BestProduct/>

      <About />

       <Features/>
       
        <Contact/>
        
       <Footer/>
    </>
  )
}

export default Landing