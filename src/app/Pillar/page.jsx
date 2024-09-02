import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'

const page = () => {
  return (
     <>
    <Navbar2/>
    <div className='container p-4 '>
    <h2 className='text-center text-primary p-5'>The Pillar of Islam </h2>

    <div class="row">
        <div class="col-md-6 order-md-1">
        <div className='ms-5 p-5'>
           <h4 className='text-primary col-10'>There are five pillars of Islam</h4>
           <p>The pillars of Islam are as follows</p>
            <p>1. Shahadah</p>
            <p>2. Salat</p>
            <p>3. Sakat</p>
            <p>4. Sawn</p>
            <p>5. Hajj</p>
           </div>
        </div>
        <div class="col-md-6 order-md-2">
            <img src="image 265.png" class="img-fluid" alt="Image"/>
        </div>
    </div>






   {/* </div>
    <h2 className='text-center text-primary p-5'>The Pillar of Islam </h2>

       <div className='container'>
         <div className='col-12 d-flex pb-5 gap-24'>
           <div className='ms-5 p-5'>
           <h4 className='text-primary col-10'>There are five pillars of Islam</h4>
           <p>The pillars of Islam are as follows</p>
            <p>1. Shahadah</p>
            <p>2. Salat</p>
            <p>3. Sakat</p>
            <p>4. Sawn</p>
            <p>5. Hajj</p>
           </div>
       
           <div class="image-container mb-5 mb-md-5 ms-5 justify-content-center">
                   <img className='ms-5' src="image 265.png" alt="Placeholder Image" width={400}/>
               </div>
           <div>
           <img className='ms-5 p-3' src="image 26.png" alt="" />
           </div>
         </div> */}
       </div>
    <Footer/>
    </>
  )
}

export default page