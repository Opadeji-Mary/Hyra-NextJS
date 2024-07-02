import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

const page = () => {
  return (
     <>
    <Navbar2/>

    <h1 className='text-center text-primary p-5'>Pillars of Islam</h1>
    <div className='container d-flex'>
        <div className=''>
          
        </div>

        <div className='justify-content-center'>
            <img className='mb-5' src="image 26.png" alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page