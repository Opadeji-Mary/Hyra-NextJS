import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import About from '../about/page'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
   <Nav/>
   <About/>
   <Footer/>
    </>
  )
}

export default page